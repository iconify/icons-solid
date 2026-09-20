import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/th43mszyn.css';
import '../../css/w/w5uq3cc8x.css';
import '../../css/f/fw-vshkfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="th43mszyn"/><path clip-rule="evenodd" class="w5uq3cc8x"/><path class="fw-vshkfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:passport2-duotone"} {...others} />);
}

export default Component;
