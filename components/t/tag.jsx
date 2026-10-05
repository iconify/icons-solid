import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/t9c8189eo.css';
import '../../css/j/jdpv_ysea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="t9c8189eo"/><path class="jdpv_ysea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:tag"} {...others} />);
}

export default Component;
