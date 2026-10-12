import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fylc7j5wh.css';
import '../../css/r/rn0ksnpzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fylc7j5wh"/><path class="rn0ksnpzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-pen-filled"} {...others} />);
}

export default Component;
