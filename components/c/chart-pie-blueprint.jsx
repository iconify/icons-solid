import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p7j7cdc4f.css';
import '../../css/v/vvveqibqu.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/t/t8w_4b5ze.css';
import '../../css/s/sdrqekb8s.css';
import '../../css/x/x_gpurblw.css';
import '../../css/a/az4e0mb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="p7j7cdc4f wm-deco"/><path class="vvveqibqu wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="t8w_4b5ze wm-k"/><path class="sdrqekb8s wm-a"/><path class="wm-k x_gpurblw"/><path class="az4e0mb8y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-pie-blueprint"} {...others} />);
}

export default Component;
