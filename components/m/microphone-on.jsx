import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndutjfb2y.css';
import '../../css/p/p431tn58m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ndutjfb2y"/><path class="p431tn58m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:microphone-on"} {...others} />);
}

export default Component;
