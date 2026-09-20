import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m3duksq9k.css';
import '../../css/p/pmv50n_jk.css';
import '../../css/f/fbnjgqhbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m3duksq9k"/><path class="pmv50n_jk"/><path class="fbnjgqhbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:download"} {...others} />);
}

export default Component;
