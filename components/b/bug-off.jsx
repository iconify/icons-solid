import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jhua228yh.css';
import '../../css/q/qshbrhxgm.css';
import '../../css/m/mnpe1pxkt.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jhua228yh wm-k"/><path class="qshbrhxgm"/><path class="mnpe1pxkt"/><path class="ohtj0i3jo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bug-off"} {...others} />);
}

export default Component;
