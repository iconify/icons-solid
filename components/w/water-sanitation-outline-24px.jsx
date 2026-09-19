import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1cp3g5it.css';
import '../../css/f/f13obgbqn.css';
import '../../css/z/z9l62k4ox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n1cp3g5it"/><path class="f13obgbqn"/><path clip-rule="evenodd" class="z9l62k4ox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:water-sanitation-outline-24px"} {...others} />);
}

export default Component;
