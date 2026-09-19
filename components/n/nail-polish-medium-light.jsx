import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0-kyj25h.css';
import '../../css/o/o_aejacbg.css';
import '../../css/f/f8e0vub3m.css';
import '../../css/r/rrz4x7bdi.css';
import '../../css/j/jqhhsu1iz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="x0-kyj25h"/><path class="o_aejacbg"/><path class="f8e0vub3m"/><path class="rrz4x7bdi"/><path class="jqhhsu1iz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:nail-polish-medium-light"} {...others} />);
}

export default Component;
