import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7c4zjbcd.css';
import '../../css/d/dfc4wub2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d7c4zjbcd"/><path class="dfc4wub2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:calendar-heart"} {...others} />);
}

export default Component;
