import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udjwmmbyu.css';
import '../../css/i/ily3ncazb.css';
import '../../css/m/mjwibbccu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udjwmmbyu"/><path class="ily3ncazb"/><path class="mjwibbccu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-stack-filled"} {...others} />);
}

export default Component;
