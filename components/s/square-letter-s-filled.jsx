import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1p_b8b0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w1p_b8b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-letter-s-filled"} {...others} />);
}

export default Component;
