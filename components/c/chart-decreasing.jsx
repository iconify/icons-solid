import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imff4s__r.css';
import '../../css/v/vzvjqggfh.css';
import '../../css/h/h8mm66bgl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="imff4s__r"/><path class="vzvjqggfh"/><path class="h8mm66bgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:chart-decreasing"} {...others} />);
}

export default Component;
