import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqgqo-zkd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hqgqo-zkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-user-filled"} {...others} />);
}

export default Component;
