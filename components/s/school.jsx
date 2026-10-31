import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hbhw7sbwj.css';
import '../../css/f/fk3e8x8ot.css';
import '../../css/z/z6m45-rlt.css';
import '../../css/t/t3ckhccdo.css';
import '../../css/q/qyokugbqt.css';
import '../../css/h/h6amlsigk.css';
import '../../css/z/zj_6hdcnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hbhw7sbwj wm-shadow"/><path class="fk3e8x8ot wm-shadow"/><path class="z6m45-rlt"/><path class="t3ckhccdo"/><path class="qyokugbqt"/><path class="h6amlsigk"/><path class="zj_6hdcnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:school"} {...others} />);
}

export default Component;
