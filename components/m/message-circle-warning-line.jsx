import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7o5_04oe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d7o5_04oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-circle-warning-line"} {...others} />);
}

export default Component;
