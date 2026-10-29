import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l666tebym.css';
import '../../css/z/zlx0ym4uj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/q/qpt4n0bul.css';
import '../../css/s/sxdzfouvy.css';
import '../../css/q/qoz-d9jye.css';
import '../../css/n/nfttyybug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="l666tebym wm-deco"/><path class="wm-deco zlx0ym4uj"/><path class="o7-ag87sb wm-deco"/><path class="qpt4n0bul wm-k"/><path class="sxdzfouvy wm-a"/><path class="qoz-d9jye wm-s"/><path class="nfttyybug wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sunrise-blueprint"} {...others} />);
}

export default Component;
