import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/olfotioad.css';
import '../../css/y/yl_mxbv2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="olfotioad"/><path class="yl_mxbv2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:spray-can"} {...others} />);
}

export default Component;
