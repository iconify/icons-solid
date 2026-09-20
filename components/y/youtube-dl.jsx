import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h683xnbcm.css';
import '../../css/i/ima57ac7n.css';
import '../../css/m/mdfbtzb0p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h683xnbcm"/><circle class="ima57ac7n"/><path class="mdfbtzb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:youtube-dl"} {...others} />);
}

export default Component;
