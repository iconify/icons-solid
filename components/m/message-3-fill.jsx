import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w71pim13w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w71pim13w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:message-3-fill"} {...others} />);
}

export default Component;
