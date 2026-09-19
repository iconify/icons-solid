import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yht2j6bcg.css';
import '../../css/l/ldhhj3eyq.css';
import '../../css/l/l6ne70j4c.css';
import '../../css/k/kao6npjxx.css';
import '../../css/b/b79rnk0vi.css';
import '../../css/o/oaftyq36m.css';
import '../../css/e/ehuq1ebsg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yht2j6bcg"/><path class="ldhhj3eyq"/><path class="l6ne70j4c"/><path class="kao6npjxx"/><path class="b79rnk0vi"/><path class="oaftyq36m"/><path class="ehuq1ebsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:guitar"} {...others} />);
}

export default Component;
