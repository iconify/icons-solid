import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qc7srqbbo.css';
import '../../css/i/ijcs4ts0b.css';
import '../../css/v/vk2mc_b_e.css';
import '../../css/r/rkwckacff.css';
import '../../css/b/byapvwb_p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect transform="rotate(45 24.762 3.243)" class="qc7srqbbo"/><path class="ijcs4ts0b"/><path class="vk2mc_b_e"/><path class="rkwckacff"/><path class="byapvwb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tray"} {...others} />);
}

export default Component;
