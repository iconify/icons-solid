import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b7r660gyh.css';
import '../../css/d/d9fohpece.css';
import '../../css/x/xurpiib7h.css';
import '../../css/v/v7thhccnj.css';
import '../../css/x/xpemu4q5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="b7r660gyh wm-deco"/><path class="d9fohpece wm-deco"/><path class="wm-deco xurpiib7h"/><path class="v7thhccnj wm-k"/><path class="wm-a xpemu4q5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bot-blueprint"} {...others} />);
}

export default Component;
