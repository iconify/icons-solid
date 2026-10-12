import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzowugs6h.css';
import '../../css/y/yz3e6tb8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vzowugs6h"/><path class="yz3e6tb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cable-car-filled"} {...others} />);
}

export default Component;
