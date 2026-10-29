import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sy8p1ob8a.css';
import '../../css/m/mgp8b-gvd.css';
import '../../css/r/rzb-3eeuh.css';
import '../../css/u/u_g_tg3_h.css';
import '../../css/z/zetx6lb3t.css';
import '../../css/e/epv168b8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sy8p1ob8a wm-shadow"/><path class="mgp8b-gvd"/><path class="rzb-3eeuh"/><path class="u_g_tg3_h"/><path class="wm-shine zetx6lb3t"/><path class="epv168b8p wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:move"} {...others} />);
}

export default Component;
