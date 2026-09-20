import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6lsl9b2u.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="u6lsl9b2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:notification-application-1"} {...others} />);
}

export default Component;
