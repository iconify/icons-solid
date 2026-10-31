import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gmdem8k9r.css';
import '../../css/f/fnci_hfwk.css';
import '../../css/a/az_g72z-v.css';
import '../../css/s/so82hdmdc.css';
import '../../css/n/n9b8lg9mk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gmdem8k9r wm-shadow"/><path class="fnci_hfwk"/><path class="az_g72z-v"/><path class="so82hdmdc"/><path class="n9b8lg9mk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:turtle"} {...others} />);
}

export default Component;
