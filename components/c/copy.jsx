import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/f307csvfr.css';
import '../../css/q/qfc4w7b5a.css';
import '../../css/h/hap01vbek.css';
import '../../css/c/c5b0y0tyz.css';
import '../../css/b/b5x9xi0bu.css';
import '../../css/c/cjxklzb2b.css';
import '../../css/z/zh1ud1b-k.css';
import '../../css/h/hq11aobgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="f307csvfr"/><path class="qfc4w7b5a"/><path class="hap01vbek wm-shine"/><path class="c5b0y0tyz wm-k"/><path class="b5x9xi0bu wm-a"/><path class="cjxklzb2b"/><path class="zh1ud1b-k"/><path class="hq11aobgo wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:copy"} {...others} />);
}

export default Component;
