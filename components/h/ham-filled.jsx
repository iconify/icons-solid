import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8zqi2t4s.css';
import '../../css/x/x44at5b5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8zqi2t4s"/><path clip-rule="evenodd" class="x44at5b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ham-filled"} {...others} />);
}

export default Component;
