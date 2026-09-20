import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqpi-g-5k.css';
import '../../css/p/pbrz3mfxd.css';
import '../../css/d/dtr438hsl.css';
import '../../css/m/m1uqg3ban.css';

const viewBox = {"width":256,"height":289};
const content = `<path class="uqpi-g-5k"/><circle transform="rotate(180 104.91 183.505)" class="pbrz3mfxd"/><path class="dtr438hsl"/><path class="m1uqg3ban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tauri"} {...others} />);
}

export default Component;
