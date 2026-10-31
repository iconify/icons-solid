import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l7f1sjbcp.css';
import '../../css/t/tt34m96-v.css';
import '../../css/x/x43575byl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="l7f1sjbcp wm-shadow"/><path class="tt34m96-v"/><path class="x43575byl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:app-window"} {...others} />);
}

export default Component;
