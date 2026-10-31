import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4np74bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f4np74bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-letter-j-filled"} {...others} />);
}

export default Component;
