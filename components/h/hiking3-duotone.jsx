import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z07svtb3r.css';
import '../../css/i/i5vmm9s4o.css';
import '../../css/l/lepb_exnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z07svtb3r"/><path clip-rule="evenodd" class="i5vmm9s4o"/><path class="lepb_exnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hiking3-duotone"} {...others} />);
}

export default Component;
