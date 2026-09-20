import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d83pj63ue.css';
import '../../css/g/g2c04dyyx.css';
import '../../css/o/ok_z3y4df.css';
import '../../css/r/r2lhvq26x.css';
import '../../css/p/psv6jlkbl.css';
import '../../css/n/niumdbq7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d83pj63ue"/><path class="g2c04dyyx"/><path class="ok_z3y4df"/><path class="r2lhvq26x"/><path class="psv6jlkbl"/><path class="niumdbq7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-linear"} {...others} />);
}

export default Component;
