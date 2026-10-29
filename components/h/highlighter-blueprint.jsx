import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/za8kaacpl.css';
import '../../css/i/i-70ghq2x.css';
import '../../css/w/w6jtn_m4n.css';
import '../../css/f/fhed5wbpi.css';
import '../../css/p/p1zhbt9fv.css';
import '../../css/s/ssahdd8ee.css';
import '../../css/v/v4090gjwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco za8kaacpl"/><path class="i-70ghq2x wm-deco"/><path class="w6jtn_m4n wm-deco"/><path class="fhed5wbpi wm-k"/><path class="p1zhbt9fv wm-a"/><path class="ssahdd8ee wm-k"/><path class="v4090gjwj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:highlighter-blueprint"} {...others} />);
}

export default Component;
