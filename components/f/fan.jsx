import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x6ls06ukq.css';
import '../../css/f/fzrtzvbaj.css';
import '../../css/l/lr_-6v0is.css';
import '../../css/u/uxm70-bnm.css';
import '../../css/b/bpo7kkb-y.css';
import '../../css/r/r2b6r36-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="x6ls06ukq"/><path class="fzrtzvbaj"/><path class="lr_-6v0is wm-shine"/><path class="uxm70-bnm wm-k"/><path class="bpo7kkb-y wm-a"/><path class="r2b6r36-w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:fan"} {...others} />);
}

export default Component;
