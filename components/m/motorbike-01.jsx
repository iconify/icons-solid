import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i0wtp628f.css';
import '../../css/u/u80qb9bdf.css';
import '../../css/q/q7zvs2b6v.css';
import '../../css/t/t0vbuy1_x.css';
import '../../css/j/j6wvgiblg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="i0wtp628f"/><path class="u80qb9bdf"/><circle class="q7zvs2b6v"/><path class="t0vbuy1_x"/><path class="j6wvgiblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:motorbike-01"} {...others} />);
}

export default Component;
