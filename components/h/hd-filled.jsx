import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vszamwk3o.css';
import '../../css/t/twy8dkvem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vszamwk3o"/><path clip-rule="evenodd" class="twy8dkvem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hd-filled"} {...others} />);
}

export default Component;
