import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5t4tsbnm.css';
import '../../css/s/sftrilwvg.css';
import '../../css/f/fj5lt5vqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q5t4tsbnm"/><path class="sftrilwvg"/><path class="fj5lt5vqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:gallery-thumbnails-duotone"} {...others} />);
}

export default Component;
