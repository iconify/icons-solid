import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2ly5xbum.css';
import '../../css/e/eoz2-lbpy.css';
import '../../css/s/s5okhf7bz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m2ly5xbum"/><path class="eoz2-lbpy"/><path class="s5okhf7bz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:avatar-circle-plus"} {...others} />);
}

export default Component;
