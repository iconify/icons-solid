import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygrj4yfdy.css';
import '../../css/v/vk-tonb9y.css';
import '../../css/r/rdxk35b9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ygrj4yfdy"/><path class="vk-tonb9y"/><path class="rdxk35b9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pipette-duotone"} {...others} />);
}

export default Component;
