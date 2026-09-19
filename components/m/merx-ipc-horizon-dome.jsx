import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr9efjb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vr9efjb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:merx-ipc-horizon-dome"} {...others} />);
}

export default Component;
