import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znar6ubig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="znar6ubig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:message-square-warning"} {...others} />);
}

export default Component;
