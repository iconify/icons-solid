import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/f362y_zux.css';
import '../../css/c/cz2mscbhh.css';
import '../../css/k/kbl16hb_i.css';
import '../../css/l/luord742c.css';
import '../../css/e/ekwplfbaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="f362y_zux"/><path class="cz2mscbhh"/><path class="kbl16hb_i"/><path class="luord742c"/><path class="ekwplfbaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-sing-left-note"} {...others} />);
}

export default Component;
