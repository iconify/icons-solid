import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nnkbt6bmo.css';
import '../../css/y/y0_ndpbam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nnkbt6bmo"/><path class="y0_ndpbam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:road-location-01"} {...others} />);
}

export default Component;
