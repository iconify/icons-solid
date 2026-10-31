import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qxks-ibzr.css';
import '../../css/k/kh79f8giu.css';
import '../../css/o/olut8cbbc.css';
import '../../css/w/wszrq55nb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qxks-ibzr wm-shadow"/><path class="kh79f8giu"/><path class="olut8cbbc"/><path class="wszrq55nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:unlock"} {...others} />);
}

export default Component;
