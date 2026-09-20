import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efp15db7p.css';
import '../../css/l/lakr3jbit.css';
import '../../css/j/j4qinhbwn.css';
import '../../css/d/d0ytvjb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="efp15db7p"/><path class="lakr3jbit"/><path class="j4qinhbwn"/><path class="d0ytvjb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-bold"} {...others} />);
}

export default Component;
