import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sb9vkzbhd.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/jffir3tnu.css';
import '../../css/q/q1ap8wbyv.css';
import '../../css/q/qz5pats7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sb9vkzbhd wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="jffir3tnu wm-k"/><path class="q1ap8wbyv wm-a"/><path class="qz5pats7o wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-letter-blueprint"} {...others} />);
}

export default Component;
