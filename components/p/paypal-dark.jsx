import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw_8glqog.css';
import '../../css/t/tmnz0vbmc.css';
import '../../css/f/f_quf2bof.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qw_8glqog"/><path class="tmnz0vbmc"/><path class="f_quf2bof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:paypal-dark"} {...others} />);
}

export default Component;
