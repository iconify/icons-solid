import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibo-1vb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ibo-1vb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mic-vocal-filled"} {...others} />);
}

export default Component;
