import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0ips-hnl.css';
import '../../css/f/f2vy__bko.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l0ips-hnl"/><path class="f2vy__bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:trash-off-filled"} {...others} />);
}

export default Component;
