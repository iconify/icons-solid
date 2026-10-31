import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t9ymevbgl.css';
import '../../css/v/v4h-hybof.css';
import '../../css/s/sbf5uab6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t9ymevbgl wm-shadow"/><path class="v4h-hybof"/><path class="sbf5uab6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:panel-top"} {...others} />);
}

export default Component;
