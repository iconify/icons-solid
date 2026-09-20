import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuhlkkm_e.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="fuhlkkm_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ringing-bell-notification"} {...others} />);
}

export default Component;
