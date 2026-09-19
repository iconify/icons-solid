import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vvjh65z0p.css';
import '../../css/a/ave4vib6q.css';
import '../../css/t/tsk07gbjh.css';
import '../../css/w/weecswtrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vvjh65z0p"/><circle class="ave4vib6q"/><path class="tsk07gbjh"/><path class="weecswtrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-up"} {...others} />);
}

export default Component;
