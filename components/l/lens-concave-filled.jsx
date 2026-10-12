import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wik1a2t4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wik1a2t4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lens-concave-filled"} {...others} />);
}

export default Component;
