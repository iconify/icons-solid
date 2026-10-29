import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ru7hbhzoe.css';
import '../../css/o/otylp905o.css';
import '../../css/z/zsc4yyb6e.css';
import '../../css/u/uylg6bcvj.css';
import '../../css/f/fd6pd66bu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ru7hbhzoe wm-k"/><path class="otylp905o wm-a"/><path class="wm-shadow zsc4yyb6e"/><path class="uylg6bcvj wm-k"/><path class="fd6pd66bu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notepad-text-engrave"} {...others} />);
}

export default Component;
