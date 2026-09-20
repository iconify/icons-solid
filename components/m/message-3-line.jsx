import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vczk4db9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vczk4db9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:message-3-line"} {...others} />);
}

export default Component;
