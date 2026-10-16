import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/detgaacqd.css';
import '../../css/j/j0yefd1fo.css';
import '../../css/h/hp7pi0p4r.css';
import '../../css/l/lbljyc_gg.css';
import '../../css/f/fcluyzogb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="detgaacqd"/><path class="j0yefd1fo"/><path class="hp7pi0p4r"/><path class="lbljyc_gg"/><path class="fcluyzogb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:level-crossing-48"} {...others} />);
}

export default Component;
