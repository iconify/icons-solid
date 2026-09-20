import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hww7_mpri.css';
import '../../css/v/vdh17syoh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hww7_mpri"/><path class="vdh17syoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:picture-in-picture-top-filled"} {...others} />);
}

export default Component;
