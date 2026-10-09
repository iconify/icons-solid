import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmgp-hp4m.css';
import '../../css/p/pp2z-qb2n.css';
import '../../css/d/dp7t9qbvm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rmgp-hp4m"/><path class="pp2z-qb2n"/><path class="dp7t9qbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:retrofit-20-bold"} {...others} />);
}

export default Component;
