import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nc6hzd_qw.css';
import '../../css/p/p0sh46fyl.css';
import '../../css/k/kr3fhxbjx.css';
import '../../css/o/ox8qx8vaq.css';
import '../../css/g/gcuf1gbkz.css';
import '../../css/h/hfthgjb3b.css';
import '../../css/b/b7t70q3ao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="nc6hzd_qw wm-shadow"/><path class="p0sh46fyl"/><path class="kr3fhxbjx"/><path class="ox8qx8vaq"/><path class="gcuf1gbkz"/><path class="hfthgjb3b wm-shine"/><path class="b7t70q3ao wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:files"} {...others} />);
}

export default Component;
