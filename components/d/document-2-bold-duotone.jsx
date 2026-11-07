import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6twh0b_q.css';
import '../../css/h/hsyg8kbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n6twh0b_q"/><path class="hsyg8kbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-2-bold-duotone"} {...others} />);
}

export default Component;
