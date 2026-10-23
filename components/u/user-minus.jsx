import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e7h8csfzh.css';
import '../../css/r/r-67_tbgc.css';
import '../../css/k/kp8y-_btp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="e7h8csfzh"/><path class="r-67_tbgc"/><path class="kp8y-_btp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:user-minus"} {...others} />);
}

export default Component;
