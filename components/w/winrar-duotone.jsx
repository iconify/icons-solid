import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wrg-mvb_e.css';
import '../../css/r/rx1jali2u.css';
import '../../css/v/v0x34cmzr.css';
import '../../css/u/umbptl6nc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wrg-mvb_e"/><path class="rx1jali2u"/><path class="v0x34cmzr"/><path clip-rule="evenodd" class="umbptl6nc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:winrar-duotone"} {...others} />);
}

export default Component;
