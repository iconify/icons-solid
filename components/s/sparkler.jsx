import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d2lqw11bx.css';
import '../../css/f/fdhb8fb-x.css';
import '../../css/h/hsgg6j0lp.css';
import '../../css/m/m3mfq9x2i.css';
import '../../css/j/jgwm0beal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="d2lqw11bx"/><path class="fdhb8fb-x wm-s"/><path class="hsgg6j0lp wm-k"/><path class="m3mfq9x2i wm-a"/><path class="jgwm0beal wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sparkler"} {...others} />);
}

export default Component;
