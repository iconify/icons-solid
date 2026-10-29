import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr75xpvgp.css';
import '../../css/l/lxl40-g2u.css';
import '../../css/o/o-9s_9biq.css';
import '../../css/f/f1n-wmb7a.css';
import '../../css/w/w1692lbix.css';
import '../../css/e/ebtgtnz4p.css';
import '../../css/l/l39_me6dw.css';
import '../../css/s/sau_hbswy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kr75xpvgp wm-shadow"/><path class="lxl40-g2u wm-k"/><path class="o-9s_9biq wm-k"/><path class="f1n-wmb7a wm-k"/><path class="w1692lbix wm-k"/><path class="ebtgtnz4p wm-k"/><path class="l39_me6dw wm-shine"/><path class="sau_hbswy wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:mountain-snow"} {...others} />);
}

export default Component;
