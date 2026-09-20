import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruwzk5v4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ruwzk5v4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:vkontakte-line"} {...others} />);
}

export default Component;
