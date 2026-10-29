import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jv3lt9s1r.css';
import '../../css/r/rdjxs30_z.css';
import '../../css/p/pwsazko7z.css';
import '../../css/y/yn_loccov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jv3lt9s1r"/><path class="rdjxs30_z wm-a"/><path class="pwsazko7z wm-s"/><path class="wm-a yn_loccov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:jack-o-lantern"} {...others} />);
}

export default Component;
