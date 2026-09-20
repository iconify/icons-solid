import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hl0ntnzlb.css';
import '../../css/m/ml7_r2b-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hl0ntnzlb"/><path class="ml7_r2b-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:content-pen-write"} {...others} />);
}

export default Component;
