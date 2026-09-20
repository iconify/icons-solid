import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oi1a1sp6f.css';
import '../../css/o/o_rvbrbym.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="oi1a1sp6f"/><path class="o_rvbrbym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:check-circle-breakout"} {...others} />);
}

export default Component;
