import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2ch6-ban.css';
import '../../css/k/kmvltdbhh.css';
import '../../css/m/mx_g6rb3q.css';
import '../../css/w/wgjztzbms.css';
import '../../css/c/czugqwb_p.css';
import '../../css/r/rrp9v8czq.css';
import '../../css/i/irft7ub_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2ch6-ban wm-shadow"/><path class="kmvltdbhh wm-k"/><path class="mx_g6rb3q wm-k"/><path class="wgjztzbms wm-k"/><path class="czugqwb_p wm-k"/><path class="rrp9v8czq wm-shine"/><path class="irft7ub_b wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:subscript"} {...others} />);
}

export default Component;
