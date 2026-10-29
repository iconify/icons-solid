import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_mc4ya_v.css';
import '../../css/z/z56-4sbhg.css';
import '../../css/j/juse7d_jr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a x_mc4ya_v"/><path class="wm-k z56-4sbhg"/><path class="juse7d_jr wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:microphone"} {...others} />);
}

export default Component;
