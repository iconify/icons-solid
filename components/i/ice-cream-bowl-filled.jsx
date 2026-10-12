import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdmj-0wpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qdmj-0wpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ice-cream-bowl-filled"} {...others} />);
}

export default Component;
