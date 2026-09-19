import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f96hxbcul.css';
import '../../css/i/iwshb_4iy.css';
import '../../css/c/c-bap97ue.css';
import '../../css/d/dh5qqbbhm.css';
import '../../css/q/q-9xrx5wt.css';
import '../../css/t/tez_p3b5j.css';
import '../../css/w/wh7_7-j0r.css';
import '../../css/h/hn-3-acqr.css';
import '../../css/b/bsohj8buf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="f96hxbcul"/><path class="iwshb_4iy"/><path class="c-bap97ue"/><path class="dh5qqbbhm"/><path class="q-9xrx5wt"/><path class="tez_p3b5j"/><path class="wh7_7-j0r"/><path class="hn-3-acqr"/><path class="bsohj8buf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:carousel-horse"} {...others} />);
}

export default Component;
