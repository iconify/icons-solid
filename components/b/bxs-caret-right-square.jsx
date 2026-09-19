import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3yk_lb9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3yk_lb9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-caret-right-square"} {...others} />);
}

export default Component;
