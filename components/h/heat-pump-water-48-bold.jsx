import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftc5aebjh.css';
import '../../css/f/fe1-tbc_v.css';
import '../../css/m/mhimm6b_a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ftc5aebjh"/><path class="fe1-tbc_v"/><path class="mhimm6b_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-water-48-bold"} {...others} />);
}

export default Component;
