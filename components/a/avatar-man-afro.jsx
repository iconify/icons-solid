import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/ics17rbtd.css';
import '../../css/r/ro9o41bvh.css';
import '../../css/v/v2lhekbwh.css';
import '../../css/k/kr9qfqbem.css';
import '../../css/v/vrnlj-b2p.css';
import '../../css/w/w2c1lnbvb.css';
import '../../css/j/joiyxmb5b.css';
import '../../css/d/d1k4vcd7l.css';
import '../../css/a/atpikebfo.css';
import '../../css/z/z22xbkb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ics17rbtd"/><path class="ro9o41bvh"/><path class="v2lhekbwh"/><path class="kr9qfqbem"/><path class="vrnlj-b2p wm-shine"/><path class="w2c1lnbvb wm-k"/><path class="joiyxmb5b wm-a"/><path class="d1k4vcd7l"/><path class="atpikebfo"/><path class="wm-shine z22xbkb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-man-afro"} {...others} />);
}

export default Component;
