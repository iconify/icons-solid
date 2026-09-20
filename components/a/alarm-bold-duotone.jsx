import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wchcdfbix.css';
import '../../css/u/uulan2amp.css';
import '../../css/o/omt0vob3d.css';
import '../../css/p/pl37d4g4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wchcdfbix"/><path class="uulan2amp"/><path class="omt0vob3d"/><path class="pl37d4g4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alarm-bold-duotone"} {...others} />);
}

export default Component;
