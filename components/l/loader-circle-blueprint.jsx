import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lmr25hber.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/t/twrukyb-k.css';
import '../../css/o/od9eo774w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lmr25hber wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="twrukyb-k"/><path class="od9eo774w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:loader-circle-blueprint"} {...others} />);
}

export default Component;
