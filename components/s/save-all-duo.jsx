import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hyn92kbvu.css';
import '../../css/t/t7_4o5bhk.css';
import '../../css/y/y27beivkv.css';
import '../../css/q/qo-b4ibmq.css';
import '../../css/n/nq-j1qtfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hyn92kbvu"/><path class="t7_4o5bhk wm-a"/><path class="wm-a y27beivkv"/><path class="qo-b4ibmq"/><path class="nq-j1qtfz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:save-all-duo"} {...others} />);
}

export default Component;
