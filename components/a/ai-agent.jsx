import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t4d7rpbqj.css';
import '../../css/e/e9v8jcb4j.css';
import '../../css/g/g16brbwge.css';
import '../../css/s/snlvk-mhf.css';
import '../../css/j/jhniv1ffu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="t4d7rpbqj"/><path class="e9v8jcb4j"/><path class="g16brbwge"/><path class="snlvk-mhf"/><path class="jhniv1ffu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-agent"} {...others} />);
}

export default Component;
