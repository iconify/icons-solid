import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxmkebcbg.css';
import '../../css/j/j1kdqfrps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bxmkebcbg"/><path class="j1kdqfrps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-comment-minus"} {...others} />);
}

export default Component;
