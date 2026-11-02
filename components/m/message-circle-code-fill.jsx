import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/godna7t4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="godna7t4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-circle-code-fill"} {...others} />);
}

export default Component;
