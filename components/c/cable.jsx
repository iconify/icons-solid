import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/ke9wffmav.css';
import '../../css/d/dr5ltpb6s.css';
import '../../css/q/qx_x0ac8s.css';
import '../../css/b/bz1c17bfk.css';
import '../../css/c/c9r91ziyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ke9wffmav wm-shadow"/><path class="dr5ltpb6s wm-shadow"/><path class="qx_x0ac8s"/><path class="bz1c17bfk"/><path class="c9r91ziyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cable"} {...others} />);
}

export default Component;
