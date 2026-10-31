import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c4101lbrv.css';
import '../../css/q/qgeu3-b5w.css';
import '../../css/i/iyomzbcra.css';
import '../../css/v/v1uy6i-ya.css';
import '../../css/y/y34dlep5s.css';
import '../../css/t/t73t6lj2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c4101lbrv wm-shadow"/><path class="qgeu3-b5w"/><path class="iyomzbcra"/><path class="v1uy6i-ya"/><path class="y34dlep5s"/><path class="t73t6lj2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:package-open"} {...others} />);
}

export default Component;
