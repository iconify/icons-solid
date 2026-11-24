import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhz6diiim.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hhz6diiim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:avocado-filled"} {...others} />);
}

export default Component;
