import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9n57f0ap.css';
import '../../css/o/ohmdx3_wm.css';
import '../../css/h/h3m2r4bii.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v9n57f0ap"/><path class="ohmdx3_wm"/><path class="h3m2r4bii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:android"} {...others} />);
}

export default Component;
