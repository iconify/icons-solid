import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jpkt-ghuv.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/d/di4vrk5dl.css';
import '../../css/q/q0z4nob4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jpkt-ghuv wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="di4vrk5dl wm-k"/><path class="q0z4nob4z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bus-blueprint"} {...others} />);
}

export default Component;
