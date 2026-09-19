import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psm80-kqo.css';
import '../../css/n/n7b67oyvb.css';
import '../../css/j/jal-6qjel.css';
import '../../css/s/s9pxr-_8m.css';
import '../../css/v/vjfurtbcs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="psm80-kqo"/><path class="n7b67oyvb"/><path class="jal-6qjel"/><path class="s9pxr-_8m"/><path class="vjfurtbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:lab-coat"} {...others} />);
}

export default Component;
