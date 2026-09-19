import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlz197fth.css';
import '../../css/m/mxa-l7_tk.css';
import '../../css/y/ygxadpg2c.css';
import '../../css/s/sk5suy1km.css';
import '../../css/u/uua325t4g.css';
import '../../css/q/q_tznac0a.css';
import '../../css/o/od8y7gbaf.css';
import '../../css/f/fhxhqwh7s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xlz197fth"/><path class="mxa-l7_tk"/><path class="ygxadpg2c"/><path class="sk5suy1km"/><path class="uua325t4g"/><path class="q_tznac0a"/><path class="od8y7gbaf"/><path class="fhxhqwh7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:construct"} {...others} />);
}

export default Component;
