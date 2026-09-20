import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kii07kbwu.css';
import '../../css/k/kp7cty-ty.css';
import '../../css/n/n37rihgur.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kii07kbwu"/><path clip-rule="evenodd" class="kp7cty-ty"/><path class="n37rihgur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:download-box-1-flat"} {...others} />);
}

export default Component;
