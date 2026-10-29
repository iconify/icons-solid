import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-3ob9bho.css';
import '../../css/j/j6vszybch.css';
import '../../css/t/tlsuctbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-3ob9bho wm-shadow"/><path class="j6vszybch wm-k"/><path class="tlsuctbpn wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-down-right"} {...others} />);
}

export default Component;
