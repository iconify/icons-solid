import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/s/swww2f5zv.css';
import '../../css/v/vo4oclbto.css';
import '../../css/b/bvccarxma.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="swww2f5zv"/><path class="vo4oclbto"/><path class="bvccarxma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:raspberrypi-dark"} {...others} />);
}

export default Component;
