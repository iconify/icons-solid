import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pz3scgbdp.css';
import '../../css/v/vy_h11b1c.css';
import '../../css/r/rwivxdqcz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="pz3scgbdp"/><path class="vy_h11b1c"/><path class="rwivxdqcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:geometric-shapes-02"} {...others} />);
}

export default Component;
