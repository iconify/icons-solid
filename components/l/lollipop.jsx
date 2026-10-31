import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mi9y5r1hc.css';
import '../../css/g/glvy3gwto.css';
import '../../css/w/whnw3ub8q.css';
import '../../css/b/b5i0fcb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="mi9y5r1hc wm-shadow"/><path class="glvy3gwto wm-shadow"/><path class="whnw3ub8q"/><path class="b5i0fcb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lollipop"} {...others} />);
}

export default Component;
