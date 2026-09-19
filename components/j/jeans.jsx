import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z74kumn2b.css';
import '../../css/j/jwu00s_8x.css';
import '../../css/w/w249edbbv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z74kumn2b"/><path class="jwu00s_8x"/><circle class="w249edbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:jeans"} {...others} />);
}

export default Component;
