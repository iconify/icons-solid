import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kcopiog_n.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/oqzbv9bha.css';
import '../../css/f/fxy57tbhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kcopiog_n"/><g class="mc2zb0bvp"><path class="oqzbv9bha"/><path class="fxy57tbhk"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-library-bold-duotone"} {...others} />);
}

export default Component;
