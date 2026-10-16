import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqjbftbwq.css';
import '../../css/o/ofl6j6bfd.css';
import '../../css/f/f-53mjktu.css';
import '../../css/r/rh46m5swi.css';
import '../../css/v/vqbcmlb5o.css';
import '../../css/n/n-d1agb8i.css';
import '../../css/i/i8rb7kp8z.css';
import '../../css/o/ok4wdjbpy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kqjbftbwq"/><path class="ofl6j6bfd"/><path class="f-53mjktu"/><path class="rh46m5swi"/><path class="vqbcmlb5o"/><path class="n-d1agb8i"/><path class="i8rb7kp8z"/><path class="ok4wdjbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-facade-48"} {...others} />);
}

export default Component;
