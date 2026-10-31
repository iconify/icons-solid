import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/muntwct_t.css';
import '../../css/j/jl1r8qbwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="muntwct_t wm-k"/><path class="jl1r8qbwp wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:haunted-house-gloss"} {...others} />);
}

export default Component;
