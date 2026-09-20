import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/s/sxc2accst.css';
import '../../css/q/qea20536a.css';
import '../../css/u/u1ts3dbke.css';
import '../../css/z/z2w67ghwc.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path fill="url(#SVGypcuEbMU)" class="sxc2accst"/><defs><linearGradient id="SVGypcuEbMU" x1="218" x2="38" y1="38" y2="218" gradientUnits="userSpaceOnUse"><stop offset=".003" class="qea20536a"/><stop offset=".469" class="u1ts3dbke"/><stop offset="1" class="z2w67ghwc"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:kotlin-light"} {...others} />);
}

export default Component;
