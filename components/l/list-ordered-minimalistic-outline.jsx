import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r-jnwm4iw.css';
import '../../css/e/eyppg8b4c.css';
import '../../css/c/c46ykccqu.css';
import '../../css/a/a6po9pbyl.css';
import '../../css/a/aq3qgkbri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r-jnwm4iw"/><path class="eyppg8b4c"/><path class="c46ykccqu"/><path class="a6po9pbyl"/><path class="aq3qgkbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-ordered-minimalistic-outline"} {...others} />);
}

export default Component;
