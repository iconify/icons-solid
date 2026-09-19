import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/w/w1vo2grui.css';
import '../../css/u/u2w4utbcp.css';
import '../../css/y/yt71xy8is.css';
import '../../css/n/nq6mfsuzd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="w1vo2grui"/><path class="u2w4utbcp"/><path class="yt71xy8is"/><path class="nq6mfsuzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pleading-face"} {...others} />);
}

export default Component;
