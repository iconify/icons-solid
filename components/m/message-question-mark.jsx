import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upaw9jfrj.css';
import '../../css/p/p56h_bbeb.css';
import '../../css/v/vece7s5mn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="upaw9jfrj"/><path class="p56h_bbeb"/><path class="vece7s5mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-question-mark"} {...others} />);
}

export default Component;
