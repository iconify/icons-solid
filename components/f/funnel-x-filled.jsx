import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi6y65ble.css';
import '../../css/j/j2lg5bcnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xi6y65ble"/><path class="j2lg5bcnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:funnel-x-filled"} {...others} />);
}

export default Component;
