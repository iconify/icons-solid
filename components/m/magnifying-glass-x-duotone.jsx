import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vlr2nacjl.css';
import '../../css/b/by63i8wgk.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="vlr2nacjl"/><path class="by63i8wgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:magnifying-glass-x-duotone"} {...others} />);
}

export default Component;
