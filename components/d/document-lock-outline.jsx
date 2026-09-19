import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu56fbc3i.css';
import '../../css/j/j8o08_b3e.css';
import '../../css/z/z07rjrbqz.css';
import '../../css/w/w_-9rrb7q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pu56fbc3i"/><path class="j8o08_b3e"/><path class="z07rjrbqz"/><path class="w_-9rrb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:document-lock-outline"} {...others} />);
}

export default Component;
