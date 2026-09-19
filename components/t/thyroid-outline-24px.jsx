import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wyw5ebctg.css';
import '../../css/l/leshkdbtw.css';
import '../../css/v/v75-yb1pz.css';
import '../../css/u/u1mtvbbes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wyw5ebctg"/><path class="leshkdbtw"/><path class="v75-yb1pz"/><path class="u1mtvbbes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:thyroid-outline-24px"} {...others} />);
}

export default Component;
