import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yixzgdgwh.css';
import '../../css/d/diznkek8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yixzgdgwh"/><path class="diznkek8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:entrance-stairs"} {...others} />);
}

export default Component;
