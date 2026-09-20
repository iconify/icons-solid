import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3q9g5bfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3q9g5bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:notification-newdot-line"} {...others} />);
}

export default Component;
