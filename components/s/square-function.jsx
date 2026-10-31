import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/h/h0vn7bjwb.css';
import '../../css/b/b1mxoy9vx.css';
import '../../css/p/pfdbmob0w.css';
import '../../css/l/lslrt22xa.css';
import '../../css/y/ykzbt_bef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="h0vn7bjwb"/><path class="b1mxoy9vx"/><path class="pfdbmob0w"/><path class="lslrt22xa"/><path class="ykzbt_bef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:square-function"} {...others} />);
}

export default Component;
