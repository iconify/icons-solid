import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qls5yob2g.css';
import '../../css/s/se8z_dbje.css';
import '../../css/x/xs74edchb.css';
import '../../css/b/bsgsx4b-b.css';
import '../../css/p/p_03qcbda.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qls5yob2g"/><path class="se8z_dbje"/><path class="xs74edchb"/><path class="bsgsx4b-b"/><path class="p_03qcbda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:six-oclock"} {...others} />);
}

export default Component;
