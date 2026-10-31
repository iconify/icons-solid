import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jp3i_tqcc.css';
import '../../css/a/a5y1zm6in.css';
import '../../css/l/l4-zqcb2t.css';
import '../../css/f/fm88cmo8g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jp3i_tqcc wm-shadow"/><path class="a5y1zm6in wm-shadow"/><path class="l4-zqcb2t"/><path class="fm88cmo8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-big-up"} {...others} />);
}

export default Component;
