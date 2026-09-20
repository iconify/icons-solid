import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhdgbwbzn.css';
import '../../css/v/vnr_3bcav.css';
import '../../css/b/b-ugj9b2d.css';
import '../../css/b/bf65k4cbf.css';
import '../../css/z/ztge1jb_b.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="bhdgbwbzn"/><path class="vnr_3bcav"/><path class="b-ugj9b2d"/><path class="bf65k4cbf"/><path class="ztge1jb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:bigben"} {...others} />);
}

export default Component;
