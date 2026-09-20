import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ccaahidjq.css';
import '../../css/f/fwdp9bc6y.css';
import '../../css/d/dec2ud7ow.css';
import '../../css/b/bb-2fz92u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ccaahidjq"/><path class="fwdp9bc6y"/><path class="dec2ud7ow"/><path clip-rule="evenodd" class="bb-2fz92u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-library-2-bold"} {...others} />);
}

export default Component;
