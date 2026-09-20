import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd-1__-2j.css';
import '../../css/r/ru339w58w.css';
import '../../css/j/j4h73t-4q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zd-1__-2j"/><path class="ru339w58w"/><path clip-rule="evenodd" class="j4h73t-4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hand-held-flat"} {...others} />);
}

export default Component;
