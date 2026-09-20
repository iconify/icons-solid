import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nr84sr1dz.css';
import '../../css/k/k9mmmbj9p.css';
import '../../css/j/j4zojfbvp.css';
import '../../css/f/fdek9y16b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="nr84sr1dz"/><path class="k9mmmbj9p"/><path class="j4zojfbvp"/><path class="fdek9y16b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:vr-headset-2"} {...others} />);
}

export default Component;
