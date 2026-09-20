import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc6xhac8s.css';
import '../../css/p/p-3va582c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dc6xhac8s"/><path class="p-3va582c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:messages-bubble-image"} {...others} />);
}

export default Component;
