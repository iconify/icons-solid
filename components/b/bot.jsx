import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g8ivu2lzf.css';
import '../../css/n/n8f4-6bdp.css';
import '../../css/a/atu0moblm.css';
import '../../css/u/u_t5u3muw.css';
import '../../css/b/boocv2bhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g8ivu2lzf wm-shadow"/><path class="n8f4-6bdp"/><path class="atu0moblm"/><path class="u_t5u3muw"/><path class="boocv2bhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bot"} {...others} />);
}

export default Component;
