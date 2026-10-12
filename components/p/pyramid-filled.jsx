import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byv5v7eqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="byv5v7eqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pyramid-filled"} {...others} />);
}

export default Component;
