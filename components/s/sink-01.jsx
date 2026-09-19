import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d3x_fubem.css';
import '../../css/z/zri-9ndye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d3x_fubem"/><path class="zri-9ndye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sink-01"} {...others} />);
}

export default Component;
