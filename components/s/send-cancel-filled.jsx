import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihvmary2y.css';
import '../../css/y/y1oz-jo5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihvmary2y"/><path class="y1oz-jo5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:send-cancel-filled"} {...others} />);
}

export default Component;
