import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvla71nxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qvla71nxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:grin-tongue-wink"} {...others} />);
}

export default Component;
