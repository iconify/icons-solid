import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_9hocblj.css';
import '../../css/j/jr2c_p1uz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_9hocblj"/><path clip-rule="evenodd" class="jr2c_p1uz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:mining-device-filled"} {...others} />);
}

export default Component;
