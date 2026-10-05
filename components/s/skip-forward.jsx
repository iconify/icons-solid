import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/htn0afvjj.css';
import '../../css/v/vmue01bzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="htn0afvjj"/><path class="vmue01bzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:skip-forward"} {...others} />);
}

export default Component;
