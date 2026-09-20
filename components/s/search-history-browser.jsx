import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whsw1jttk.css';
import '../../css/l/lwfur486u.css';
import '../../css/t/te8kfhm0b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="whsw1jttk"/><path class="lwfur486u"/><path class="te8kfhm0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:search-history-browser"} {...others} />);
}

export default Component;
