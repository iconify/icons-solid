import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/aejho9bub.css';
import '../../css/v/vawqzf_wy.css';
import '../../css/k/kxdvx1j5r.css';
import '../../css/e/ewb4c0zlw.css';
import '../../css/p/pht4mnbru.css';
import '../../css/p/pfp6hfb3z.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="aejho9bub"/><path class="vawqzf_wy"/><path class="kxdvx1j5r wm-shine"/><path class="ewb4c0zlw wm-k"/><path class="pht4mnbru wm-a"/><path class="pfp6hfb3z wm-s"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-monster"} {...others} />);
}

export default Component;
