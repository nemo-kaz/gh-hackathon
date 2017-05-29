(function($) {
	var reportController = {
		__name: 'handson.ReportController',





__ready: function() {
  this.$find('input[name="reportDate"]').val(
    handson.utils.formatDateWithHyphen(new Date())
  );
   this.$find('input[name="startTime"]').val('09:00');
   	this.$find('input[name="endTime"]').val(
		handson.utils.formatTime(new Date()));
},

		
///////		
//		'input, textarea focusout': function(context, $el) {
//		},
//////


'input, textarea focusout': function(context, $el) {
	// �ϐ��̒�`
	var value = $el.val();
	var name = $el.attr('name');
	var error_class  = 'has-error';
	var $msg = this.$find('.report-content').find('.msg');
	var $formGroup = $el.parents('.form-group');
	
	// ���O�����̐ݒ�
	if (name == 'img') {
		return;
	}
	
	// ���̓`�F�b�N
	if (value == null || value == '') {
		// ���͂���Ă��Ȃ��ꍇ�̏���
		if ($formGroup.hasClass(error_class)) {
			// ���łɃG���[�\��������Ȃ�Ή������Ȃ�
			return;
		}
		// ��̓��͍��ڂɐԂ��g��ǉ�
		$formGroup.addClass(error_class);
		
		// ���͍��ږ��i���{��j���擾
		var label = $formGroup.find('label').text();
		
		// ���b�Z�[�W�̑g�ݗ���
		var $p = $('<p data-handson-input-name="' + name + '">');
		$p.append('<strong>' + label + '����͂��Ă�������' + '</strong>');
		
		// �G���[���b�Z�[�W�̑}��
		$msg.append($p);
	} else {
		// ���͂���Ă���ꍇ�̏���
		// �G���[�̘g���O��
		$formGroup.removeClass(error_class);
		
		// ���͂������ڂ̃��b�Z�[�W������
		$msg.find('p[data-handson-input-name="' + name + '"]').remove();
	}
	
	// ���b�Z�[�W�̕\���A��\���̎w��
	if ($msg.children().length != 0) {
		// �G���[����
		$msg.show();
	} else {
		// �G���[�Ȃ�
		$msg.hide();
	}
},




		'input[name="img"] change': function(context, $el) {
		},

		'.confirm click': function(context, $el) {
		},

	};
	
	h5.core.expose(reportController);
})(jQuery);
$(function() {
	h5.core.controller(document.body, handson.ReportController);
});
