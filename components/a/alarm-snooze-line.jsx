import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5taks1bd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u5taks1bd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:alarm-snooze-line"} {...others} />);
}

export default Component;
