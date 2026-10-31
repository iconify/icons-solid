import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/of_deqbkd.css';
import '../../css/v/vlj567b_n.css';
import '../../css/k/kuv65nwmj.css';
import '../../css/k/k80yvlbeg.css';
import '../../css/x/x1bbb8bua.css';
import '../../css/g/gg1e7xbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="of_deqbkd wm-k"/><path class="vlj567b_n wm-s"/><path class="kuv65nwmj wm-deco"/><path class="k80yvlbeg wm-k"/><path class="wm-s x1bbb8bua"/><path class="gg1e7xbrw wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:package-x"} {...others} />);
}

export default Component;
