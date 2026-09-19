import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q7xdmo1fq.css';
import '../../css/j/jl44fzr1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q7xdmo1fq"/><path class="jl44fzr1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:global-editing"} {...others} />);
}

export default Component;
