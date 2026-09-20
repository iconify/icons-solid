import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhn8o8b-g.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="uhn8o8b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:notification-alarm-snooze-solid"} {...others} />);
}

export default Component;
