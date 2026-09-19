import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qls5yob2g.css';
import '../../css/u/ubrk5ee6a.css';
import '../../css/y/y1h8qcbwh.css';
import '../../css/t/tdzfsxb5e.css';
import '../../css/p/p_03qcbda.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qls5yob2g"/><path class="ubrk5ee6a"/><path class="y1h8qcbwh"/><path class="tdzfsxb5e"/><path class="p_03qcbda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:twelve-oclock"} {...others} />);
}

export default Component;
