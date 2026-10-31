import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h4h4xjbnx.css';
import '../../css/x/x_s880ber.css';
import '../../css/d/dy345rbyh.css';
import '../../css/e/e5u3p5bbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="h4h4xjbnx wm-shadow"/><path class="x_s880ber"/><path class="dy345rbyh"/><path class="e5u3p5bbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mail-open"} {...others} />);
}

export default Component;
