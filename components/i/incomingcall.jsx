import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvysm6ifx.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="lvysm6ifx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:incomingcall"} {...others} />);
}

export default Component;
