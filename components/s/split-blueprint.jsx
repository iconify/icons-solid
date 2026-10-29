import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/prwmzh75z.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/l/l7ckfcc9c.css';
import '../../css/i/iqyqpg9id.css';
import '../../css/s/s53tgbb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="prwmzh75z wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="l7ckfcc9c wm-k"/><path class="iqyqpg9id wm-k"/><path class="s53tgbb5w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:split-blueprint"} {...others} />);
}

export default Component;
