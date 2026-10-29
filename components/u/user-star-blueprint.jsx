import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h4r4-xrka.css';
import '../../css/f/frxxjd82r.css';
import '../../css/t/t6ywtfsaq.css';
import '../../css/g/gr51g0biu.css';
import '../../css/x/x2ocqx88i.css';
import '../../css/c/c6mo7m0bg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="h4r4-xrka wm-deco"/><path class="frxxjd82r wm-deco"/><path class="t6ywtfsaq wm-deco"/><path class="gr51g0biu wm-k"/><path class="wm-s x2ocqx88i"/><path class="c6mo7m0bg wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-star-blueprint"} {...others} />);
}

export default Component;
