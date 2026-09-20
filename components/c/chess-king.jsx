import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yaooukbzi.css';
import '../../css/e/e-ozcvbwb.css';
import '../../css/g/gzuh-4bwa.css';
import '../../css/w/wti0f6p-c.css';
import '../../css/m/mi_j5cbct.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yaooukbzi"/><path class="e-ozcvbwb"/><path clip-rule="evenodd" class="gzuh-4bwa"/><path clip-rule="evenodd" class="wti0f6p-c"/><path class="mi_j5cbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:chess-king"} {...others} />);
}

export default Component;
