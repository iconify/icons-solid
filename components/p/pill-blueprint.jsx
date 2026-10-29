import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w1fa89b6r.css';
import '../../css/z/zis5pgb4d.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/z/zygpqzk7v.css';
import '../../css/e/ewn913uqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="w1fa89b6r wm-deco"/><path class="wm-deco zis5pgb4d"/><path class="o7-ag87sb wm-deco"/><path class="wm-k zygpqzk7v"/><path class="ewn913uqn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pill-blueprint"} {...others} />);
}

export default Component;
