import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxekpbbhl.css';
import '../../css/i/i-u_0kb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hxekpbbhl"/><path class="i-u_0kb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:heater-filled"} {...others} />);
}

export default Component;
