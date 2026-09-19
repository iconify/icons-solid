import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ir0nr5vgs.css';
import '../../css/e/e_q1tn3fm.css';
import '../../css/g/gu43cdvmi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ir0nr5vgs"/><path class="e_q1tn3fm"/><path class="gu43cdvmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ring"} {...others} />);
}

export default Component;
