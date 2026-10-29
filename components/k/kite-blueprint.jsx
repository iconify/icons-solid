import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y4pkjtbjs.css';
import '../../css/i/ibpnj1b4u.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/j/jlv0b8x4n.css';
import '../../css/w/wod2x8bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco y4pkjtbjs"/><path class="ibpnj1b4u wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="jlv0b8x4n"/><path class="wod2x8bdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kite-blueprint"} {...others} />);
}

export default Component;
