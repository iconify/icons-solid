import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8f82y98i.css';
import '../../css/i/i23da44dj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b8f82y98i"/><path class="i23da44dj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lighthouse-filled"} {...others} />);
}

export default Component;
