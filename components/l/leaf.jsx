import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxi30kbln.css';
import '../../css/h/h-qy76fxv.css';
import '../../css/s/s9fr-lm_n.css';
import '../../css/z/zilu70ddt.css';
import '../../css/s/s3bws3bup.css';
import '../../css/k/k7yslikvz.css';
import '../../css/l/lzjuh0bul.css';
import '../../css/r/rxykg3a7l.css';
import '../../css/p/pl7rs4blw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxi30kbln wm-shadow"/><path class="h-qy76fxv wm-k"/><path class="s9fr-lm_n wm-k"/><path class="wm-k zilu70ddt"/><path class="s3bws3bup wm-k"/><path class="k7yslikvz wm-k"/><path class="lzjuh0bul wm-shine"/><path class="rxykg3a7l wm-a"/><path class="pl7rs4blw wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:leaf"} {...others} />);
}

export default Component;
