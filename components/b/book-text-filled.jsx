import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmkjuy8tm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zmkjuy8tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-text-filled"} {...others} />);
}

export default Component;
