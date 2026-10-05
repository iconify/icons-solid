import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yuujzdx_x.css';
import '../../css/h/hl2dq2b3a.css';
import '../../css/b/b61j3abxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="yuujzdx_x"/><path class="hl2dq2b3a"/><path class="b61j3abxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:circle-x"} {...others} />);
}

export default Component;
