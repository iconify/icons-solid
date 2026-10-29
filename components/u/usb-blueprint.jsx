import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ija1yx6op.css';
import '../../css/u/ulpf4zb8i.css';
import '../../css/x/xiqtpub3n.css';
import '../../css/v/vw6ac2bkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ija1yx6op wm-deco"/><path class="ulpf4zb8i wm-deco"/><path class="wm-deco xiqtpub3n"/><path class="vw6ac2bkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:usb-blueprint"} {...others} />);
}

export default Component;
