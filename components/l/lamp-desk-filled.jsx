import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7tvawbir.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b7tvawbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lamp-desk-filled"} {...others} />);
}

export default Component;
