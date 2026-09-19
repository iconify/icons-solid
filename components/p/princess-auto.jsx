import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp0-zh71n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kp0-zh71n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:princess-auto"} {...others} />);
}

export default Component;
