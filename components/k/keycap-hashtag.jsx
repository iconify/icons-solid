import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtqod2khs.css';
import '../../css/q/q7xamoboa.css';
import '../../css/j/j-rmn4b4v.css';
import '../../css/p/prvb-0bwn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rtqod2khs"/><path class="q7xamoboa"/><path class="j-rmn4b4v"/><path class="prvb-0bwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:keycap-hashtag"} {...others} />);
}

export default Component;
