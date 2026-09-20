import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d3aradb7w.css';
import '../../css/j/j6u4q-b2b.css';
import '../../css/w/wtktpgbca.css';
import '../../css/o/oxhorhz7x.css';
import '../../css/n/n2acu5z3d.css';
import '../../css/r/ri-a6dzxu.css';
import '../../css/r/rw2_hftsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d3aradb7w"/><path class="j6u4q-b2b"/><path class="wtktpgbca"/><path class="oxhorhz7x"/><path class="n2acu5z3d"/><path class="ri-a6dzxu"/><path class="rw2_hftsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:masks-broken"} {...others} />);
}

export default Component;
