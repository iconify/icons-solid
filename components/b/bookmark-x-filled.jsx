import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4-1nacqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t4-1nacqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bookmark-x-filled"} {...others} />);
}

export default Component;
