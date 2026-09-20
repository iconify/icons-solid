import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6o7fihkv.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/ra6fhob8w.css';
import '../../css/s/sude8ublr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q6o7fihkv"/><g class="mc2zb0bvp"><path class="ra6fhob8w"/><path class="sude8ublr"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:full-screen-bold-duotone"} {...others} />);
}

export default Component;
