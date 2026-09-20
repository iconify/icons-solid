import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkmo4fblb.css';
import '../../css/m/mxbw-jb4i.css';
import '../../css/s/sc1pextsr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vkmo4fblb"/><path class="mxbw-jb4i"/><path class="sc1pextsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:magic-wand-2"} {...others} />);
}

export default Component;
