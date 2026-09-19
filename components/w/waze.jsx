import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r_87ts72y.css';
import '../../css/w/wdxmxgvsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r_87ts72y"/><path class="wdxmxgvsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:waze"} {...others} />);
}

export default Component;
