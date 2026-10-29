import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yqz_2re-h.css';
import '../../css/u/uo1xsbb6o.css';
import '../../css/x/xxbokhbhh.css';
import '../../css/n/ng9-c4b_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yqz_2re-h"/><path class="uo1xsbb6o"/><path class="wm-a xxbokhbhh"/><path class="ng9-c4b_d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coins"} {...others} />);
}

export default Component;
