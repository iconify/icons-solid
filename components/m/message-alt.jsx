import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0fcgjs6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r0fcgjs6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:message-alt"} {...others} />);
}

export default Component;
