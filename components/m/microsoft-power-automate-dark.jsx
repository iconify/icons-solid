import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9u8nhb5n.css';
import '../../css/j/jyg6q1bpv.css';
import '../../css/c/ckq4qm5ky.css';
import '../../css/y/y-5we3bsb.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGtZ1wnc0e" x1="237.1" x2="166.2" y1="288.1" y2="60.2" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="v9u8nhb5n"/></linearGradient><path fill="url(#SVGtZ1wnc0e)" class="jyg6q1bpv"/><path class="ckq4qm5ky"/><path class="y-5we3bsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-power-automate-dark"} {...others} />);
}

export default Component;
