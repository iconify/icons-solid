import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx8o-n15m.css';
import '../../css/t/t7awbjbhd.css';
import '../../css/w/wxhvyjbat.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vx8o-n15m"/><path class="t7awbjbhd"/><path class="wxhvyjbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:black-cat"} {...others} />);
}

export default Component;
