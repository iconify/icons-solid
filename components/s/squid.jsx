import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1-y0xbuj.css';
import '../../css/a/ad8sdtbgh.css';
import '../../css/e/ea2em1bpg.css';
import '../../css/o/oo23h785s.css';
import '../../css/u/u7qwkbb-k.css';
import '../../css/t/t-c6ir8cq.css';
import '../../css/t/t5edxsyrk.css';
import '../../css/s/s0jikbcvr.css';
import '../../css/f/f5ek8hb_n.css';
import '../../css/a/aymc5u08n.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="f1-y0xbuj"/><path class="ad8sdtbgh"/><path class="ea2em1bpg"/><path class="oo23h785s"/><path class="u7qwkbb-k"/><path class="t-c6ir8cq"/><circle class="t5edxsyrk"/><circle class="s0jikbcvr"/><path class="f5ek8hb_n"/><path class="aymc5u08n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:squid"} {...others} />);
}

export default Component;
