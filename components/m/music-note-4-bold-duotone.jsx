import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ueotw4bzn.css';
import '../../css/n/nepv9gb1g.css';
import '../../css/g/gm6succtk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ueotw4bzn"/><path class="nepv9gb1g"/><path class="gm6succtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-4-bold-duotone"} {...others} />);
}

export default Component;
