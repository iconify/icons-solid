import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u9m_db16v.css';
import '../../css/b/bf9droqgc.css';
import '../../css/j/jgl6hvb3b.css';
import '../../css/c/cx5wbybid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="u9m_db16v wm-shadow"/><path class="bf9droqgc wm-shadow"/><path class="jgl6hvb3b"/><path class="cx5wbybid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:undo"} {...others} />);
}

export default Component;
