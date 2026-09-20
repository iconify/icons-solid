import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wa5kozocz.css';
import '../../css/e/eie43ce4f.css';
import '../../css/d/dqvqeabhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wa5kozocz"/><path class="eie43ce4f"/><path clip-rule="evenodd" class="dqvqeabhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboard-bold-duotone"} {...others} />);
}

export default Component;
