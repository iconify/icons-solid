import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3ktevguq.css';
import '../../css/b/b2xg8z0en.css';
import '../../css/o/om5r6xvtb.css';
import '../../css/h/h5qmoyktb.css';
import '../../css/f/fzsj77bwy.css';
import '../../css/q/q1-slsbxf.css';
import '../../css/c/chvya0b2b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j3ktevguq"/><path class="b2xg8z0en"/><circle transform="matrix(-1 0 0 1 40 24)" class="om5r6xvtb"/><path class="h5qmoyktb"/><path class="fzsj77bwy"/><path class="q1-slsbxf"/><path class="chvya0b2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:left-branch"} {...others} />);
}

export default Component;
