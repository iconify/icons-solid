import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bld1b2bze.css';
import '../../css/e/e8epwwblk.css';
import '../../css/m/mxf0qmb4d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bld1b2bze"/><path class="e8epwwblk"/><path class="mxf0qmb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:controller"} {...others} />);
}

export default Component;
