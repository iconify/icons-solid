import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oxwxznblb.css';
import '../../css/h/hhvkgzbje.css';
import '../../css/d/d9p-odfkn.css';
import '../../css/h/hzgdejf5t.css';
import '../../css/n/ni3nf3h6x.css';
import '../../css/u/uo136ebwf.css';
import '../../css/g/g2ylwbcxp.css';
import '../../css/d/dv114zb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="oxwxznblb wm-shadow"/><path class="hhvkgzbje"/><path class="d9p-odfkn"/><path class="hzgdejf5t"/><path class="ni3nf3h6x"/><path class="uo136ebwf"/><path class="g2ylwbcxp wm-shine"/><path class="dv114zb8r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:beer"} {...others} />);
}

export default Component;
