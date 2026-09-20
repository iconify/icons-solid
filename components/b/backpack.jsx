import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iza-y7bpx.css';
import '../../css/l/lxthf7buy.css';
import '../../css/q/qwj_9ub9p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="iza-y7bpx"/><path class="lxthf7buy"/><path class="qwj_9ub9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:backpack"} {...others} />);
}

export default Component;
