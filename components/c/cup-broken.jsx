import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f8xsbma3z.css';
import '../../css/r/r2lhvq26x.css';
import '../../css/p/psv6jlkbl.css';
import '../../css/n/niumdbq7j.css';
import '../../css/g/g2c04dyyx.css';
import '../../css/o/ok_z3y4df.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f8xsbma3z"/><path class="r2lhvq26x"/><path class="psv6jlkbl"/><path class="niumdbq7j"/><path class="g2c04dyyx"/><path class="ok_z3y4df"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-broken"} {...others} />);
}

export default Component;
