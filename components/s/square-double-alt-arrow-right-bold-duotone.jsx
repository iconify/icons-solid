import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftxh2yu-e.css';
import '../../css/p/pinggybge.css';
import '../../css/e/e3jlgobxk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ftxh2yu-e"/><path class="pinggybge"/><path class="e3jlgobxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-double-alt-arrow-right-bold-duotone"} {...others} />);
}

export default Component;
