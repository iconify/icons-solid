import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk4qf0b7g.css';
import '../../css/l/l5tcskb1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yk4qf0b7g"/><path class="l5tcskb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-message-square-detail"} {...others} />);
}

export default Component;
