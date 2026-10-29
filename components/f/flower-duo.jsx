import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/slmd9ybfi.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/z/zyla41bsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="slmd9ybfi"/><path class="hbi8hhkfx wm-a"/><path class="zyla41bsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flower-duo"} {...others} />);
}

export default Component;
