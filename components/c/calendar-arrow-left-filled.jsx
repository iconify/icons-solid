import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvt7f_k7b.css';
import '../../css/t/t0khrkc2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kvt7f_k7b"/><path class="t0khrkc2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-arrow-left-filled"} {...others} />);
}

export default Component;
