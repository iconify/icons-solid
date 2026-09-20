import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q_sy8tl1b.css';
import '../../css/x/xpfqo1bed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q_sy8tl1b"/><path class="xpfqo1bed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-door-in"} {...others} />);
}

export default Component;
