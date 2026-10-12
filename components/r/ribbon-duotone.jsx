import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbabjgkhn.css';
import '../../css/v/vr6t0cbzr.css';
import '../../css/k/k323-mc_c.css';
import '../../css/a/a-8f8bbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nbabjgkhn"/><path class="vr6t0cbzr"/><path class="k323-mc_c"/><path class="a-8f8bbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ribbon-duotone"} {...others} />);
}

export default Component;
