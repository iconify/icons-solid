import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uf5g5qe5d.css';
import '../../css/d/d3z5b_b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uf5g5qe5d"/><path class="d3z5b_b7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-equal"} {...others} />);
}

export default Component;
