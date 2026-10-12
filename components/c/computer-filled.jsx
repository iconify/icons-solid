import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu2r_83ly.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eu2r_83ly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:computer-filled"} {...others} />);
}

export default Component;
