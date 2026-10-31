import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/k/k1fkjgbhm.css';
import '../../css/d/d0ck8xbof.css';
import '../../css/y/yyxr6uqwx.css';
import '../../css/p/popl1_btr.css';
import '../../css/b/bvcbp7j2d.css';
import '../../css/x/x4knhbsjr.css';
import '../../css/c/cwm7z3k_a.css';
import '../../css/z/zmxybgbkr.css';
import '../../css/p/pxwi8k6ls.css';
import '../../css/t/tv--zfbql.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path clip-rule="evenodd" class="k1fkjgbhm"/><path class="d0ck8xbof"/><path class="yyxr6uqwx"/><path class="popl1_btr"/><path class="bvcbp7j2d"/><path class="x4knhbsjr"/><path class="cwm7z3k_a"/><path class="zmxybgbkr"/><path class="pxwi8k6ls"/><path class="tv--zfbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:wall-e-pop"} {...others} />);
}

export default Component;
