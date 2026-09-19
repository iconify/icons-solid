import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l27zjez7h.css';
import '../../css/i/iawhjgcvt.css';
import '../../css/a/a5ucr2j4s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="l27zjez7h"/><path class="iawhjgcvt"/><path class="a5ucr2j4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:thong-sandal"} {...others} />);
}

export default Component;
