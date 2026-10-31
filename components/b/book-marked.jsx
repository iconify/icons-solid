import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/f_fz8wbma.css';
import '../../css/s/sz0wabcsi.css';
import '../../css/x/xihvvccpl.css';
import '../../css/q/q7p7wlb-f.css';
import '../../css/m/mi24piaof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="f_fz8wbma wm-shadow"/><path class="sz0wabcsi wm-shadow"/><path class="xihvvccpl"/><path class="q7p7wlb-f"/><path class="mi24piaof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:book-marked"} {...others} />);
}

export default Component;
