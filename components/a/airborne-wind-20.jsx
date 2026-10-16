import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2iln_b1i.css';
import '../../css/k/kg_87_b2n.css';
import '../../css/t/t0gjp2bhf.css';
import '../../css/e/ekfibsbsg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r2iln_b1i"/><path class="kg_87_b2n"/><path class="t0gjp2bhf"/><path class="ekfibsbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airborne-wind-20"} {...others} />);
}

export default Component;
