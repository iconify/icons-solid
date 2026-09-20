import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nndtzvb-p.css';
import '../../css/j/jnbhyedwz.css';
import '../../css/w/wefvhdcza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nndtzvb-p"/><path class="jnbhyedwz"/><path class="wefvhdcza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-bold"} {...others} />);
}

export default Component;
