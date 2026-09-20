import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nde522b_j.css';
import '../../css/m/mqx6s1bdl.css';
import '../../css/d/d8kbcbc-x.css';
import '../../css/o/oe3mmobcy.css';
import '../../css/g/gr8o3obgp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nde522b_j"/><path class="mqx6s1bdl"/><path class="d8kbcbc-x"/><path class="oe3mmobcy"/><path class="gr8o3obgp"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:gay"} {...others} />);
}

export default Component;
