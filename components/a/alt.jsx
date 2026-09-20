import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjad2w0vk.css';
import '../../css/f/f0-69vunq.css';
import '../../css/b/bcbhhrxuf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fjad2w0vk"/><path class="f0-69vunq"/><path class="bcbhhrxuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:alt"} {...others} />);
}

export default Component;
