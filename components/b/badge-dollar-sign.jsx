import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3h1xlegu.css';
import '../../css/w/wec5r5x0c.css';
import '../../css/f/feqaj73-y.css';
import '../../css/m/moj8iuyvm.css';
import '../../css/l/leyatlwui.css';
import '../../css/t/tna3nf43i.css';
import '../../css/o/os6pxbzio.css';
import '../../css/t/t2eu_sbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p3h1xlegu wm-shadow"/><path class="wec5r5x0c wm-k"/><path class="feqaj73-y wm-k"/><path class="moj8iuyvm wm-k"/><path class="leyatlwui wm-k"/><path class="tna3nf43i wm-shine"/><path class="os6pxbzio wm-k"/><path class="t2eu_sbvq wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:badge-dollar-sign"} {...others} />);
}

export default Component;
