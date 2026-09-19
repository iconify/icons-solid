import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w3t9h-4dz.css';
import '../../css/u/uej42obwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w3t9h-4dz"/><path class="uej42obwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:home-07"} {...others} />);
}

export default Component;
