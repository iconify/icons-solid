import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp_etqb_g.css';
import '../../css/i/igjclji7g.css';
import '../../css/r/rydg37bln.css';
import '../../css/o/or6bu4_ox.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xp_etqb_g"/><path class="igjclji7g"/><path class="rydg37bln"/><path class="or6bu4_ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-tester-20-bold"} {...others} />);
}

export default Component;
