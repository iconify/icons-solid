import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzj5p8byf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gzj5p8byf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lock-keyhole-filled"} {...others} />);
}

export default Component;
