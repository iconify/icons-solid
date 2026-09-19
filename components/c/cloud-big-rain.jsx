import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u0de-k0ac.css';
import '../../css/z/zva0s15tb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u0de-k0ac"/><path class="zva0s15tb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cloud-big-rain"} {...others} />);
}

export default Component;
