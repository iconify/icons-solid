import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhvzr3pxx.css';
import '../../css/v/vwvsfxegk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jhvzr3pxx"/><path clip-rule="evenodd" class="vwvsfxegk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-favorite-bold-duotone"} {...others} />);
}

export default Component;
