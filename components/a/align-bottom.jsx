import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/octbh580n.css';
import '../../css/u/ua1q75bod.css';
import '../../css/h/henw1v4om.css';
import '../../css/j/j8eq30bkr.css';
import '../../css/m/muyqowbii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="octbh580n wm-shadow"/><path class="ua1q75bod"/><path class="henw1v4om"/><path class="j8eq30bkr"/><path class="muyqowbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:align-bottom"} {...others} />);
}

export default Component;
