import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggub7_bum.css';
import '../../css/w/wsd978bdd.css';
import '../../css/t/thdlzyjna.css';
import '../../css/t/tiql7ybpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ggub7_bum"/><path class="wsd978bdd"/><path class="thdlzyjna"/><path class="tiql7ybpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tangent-duotone"} {...others} />);
}

export default Component;
