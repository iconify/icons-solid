import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvcg5__wh.css';
import '../../css/s/sk589gbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yvcg5__wh"/><path class="sk589gbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:message-edit"} {...others} />);
}

export default Component;
