import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a85tzjcpz.css';
import '../../css/b/b319z3bxe.css';
import '../../css/q/q1l6tebrz.css';
import '../../css/x/xp-ry7bst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a85tzjcpz wm-shadow"/><path class="b319z3bxe wm-shadow"/><path class="q1l6tebrz"/><path class="xp-ry7bst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:air-vent"} {...others} />);
}

export default Component;
