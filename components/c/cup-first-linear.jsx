import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d83pj63ue.css';
import '../../css/s/snb0d1t5g.css';
import '../../css/n/n30k0z4xd.css';
import '../../css/p/psv6jlkbl.css';
import '../../css/n/niumdbq7j.css';
import '../../css/g/g2c04dyyx.css';
import '../../css/o/ok_z3y4df.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d83pj63ue"/><path class="snb0d1t5g"/><path class="n30k0z4xd"/><path class="psv6jlkbl"/><path class="niumdbq7j"/><path class="g2c04dyyx"/><path class="ok_z3y4df"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-first-linear"} {...others} />);
}

export default Component;
