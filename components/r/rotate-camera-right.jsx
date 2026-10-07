import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nkpbhqfkh.css';
import '../../css/b/b64l0dbmf.css';
import '../../css/t/t881ox47o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nkpbhqfkh"/><path class="b64l0dbmf"/><path class="t881ox47o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:rotate-camera-right"} {...others} />);
}

export default Component;
