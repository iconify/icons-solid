import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ff-z_pbgs.css';
import '../../css/u/ugz6q-brk.css';
import '../../css/e/eg30hg2ty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ff-z_pbgs"/><path class="ugz6q-brk"/><path class="eg30hg2ty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-2-bold-duotone"} {...others} />);
}

export default Component;
