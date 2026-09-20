import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4fwx8bcd.css';
import '../../css/k/kp9tsokzs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w4fwx8bcd"/><path class="kp9tsokzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:asd"} {...others} />);
}

export default Component;
