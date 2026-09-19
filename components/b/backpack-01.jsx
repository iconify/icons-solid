import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gmaum8vqc.css';
import '../../css/g/ghb9m550i.css';
import '../../css/o/ot_m0hbva.css';
import '../../css/r/rmwwbubll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gmaum8vqc"/><path class="ghb9m550i"/><path class="ot_m0hbva"/><path class="rmwwbubll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:backpack-01"} {...others} />);
}

export default Component;
