import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h_wxivbox.css';
import '../../css/p/pfpwyqfum.css';
import '../../css/c/cyxkx1b2p.css';
import '../../css/g/g2d6wxbbs.css';
import '../../css/m/mwl81kb3o.css';
import '../../css/d/dnpigybeb.css';
import '../../css/l/l1g11f_-z.css';
import '../../css/v/vrsefcbok.css';
import '../../css/r/rsapitb1c.css';
import '../../css/w/w_4ccibhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="h_wxivbox wm-shadow"/><path class="pfpwyqfum"/><path class="cyxkx1b2p"/><path class="g2d6wxbbs"/><path class="mwl81kb3o"/><path class="dnpigybeb wm-shine"/><path class="l1g11f_-z wm-s"/><path class="vrsefcbok wm-s"/><path class="rsapitb1c wm-s"/><path class="w_4ccibhj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:stamp"} {...others} />);
}

export default Component;
