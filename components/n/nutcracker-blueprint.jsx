import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pyjh4r7hs.css';
import '../../css/f/f22o3bcfn.css';
import '../../css/l/l_5oop8hx.css';
import '../../css/b/bapo0khuc.css';
import '../../css/n/n8manbb4l.css';
import '../../css/i/iz2h4_ber.css';
import '../../css/e/ez7mo4o9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="pyjh4r7hs wm-deco"/><path class="f22o3bcfn wm-deco"/><path class="l_5oop8hx wm-a"/><path class="bapo0khuc wm-k"/><path class="n8manbb4l wm-a"/><path class="iz2h4_ber wm-k"/><path class="ez7mo4o9d wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:nutcracker-blueprint"} {...others} />);
}

export default Component;
