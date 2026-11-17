import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6pd55bue.css';
import '../../css/j/j7n6h9bec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g6pd55bue"/><path class="j7n6h9bec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-arrow-down-enter-filled"} {...others} />);
}

export default Component;
