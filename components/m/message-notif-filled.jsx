import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/luyvssboz.css';
import '../../css/j/j7ynr9b4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="luyvssboz"/><path class="j7ynr9b4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-notif-filled"} {...others} />);
}

export default Component;
