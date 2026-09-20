import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uht0ciboz.css';
import '../../css/y/ydcqa0qwf.css';
import '../../css/x/x2x-4jbhp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="uht0ciboz"/><path class="ydcqa0qwf"/><path class="x2x-4jbhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:tag-alt"} {...others} />);
}

export default Component;
