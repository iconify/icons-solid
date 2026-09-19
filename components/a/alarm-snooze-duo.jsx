import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvp0f-b9t.css';
import '../../css/e/e5v1wybfk.css';
import '../../css/q/qisn-co-d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="tvp0f-b9t"/><path class="e5v1wybfk"/><path class="qisn-co-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:alarm-snooze-duo"} {...others} />);
}

export default Component;
