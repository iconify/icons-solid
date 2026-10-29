import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i8dul2_ai.css';
import '../../css/k/kxjtm0b5x.css';
import '../../css/n/ng0mmonst.css';
import '../../css/o/ootknnyrk.css';
import '../../css/g/g8g2kab9q.css';
import '../../css/o/ow1elgkrb.css';
import '../../css/v/vg7uhb1ip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="i8dul2_ai wm-deco"/><path class="kxjtm0b5x wm-deco"/><path class="ng0mmonst wm-deco"/><path class="ootknnyrk wm-k"/><path class="g8g2kab9q wm-a"/><path class="ow1elgkrb wm-k"/><path class="vg7uhb1ip wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fast-forward-blueprint"} {...others} />);
}

export default Component;
