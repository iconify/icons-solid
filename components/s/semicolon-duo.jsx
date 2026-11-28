import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_ahlubpw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zrjey1bzk.css';
import '../../css/h/hv2uvbznp.css';
import '../../css/n/n4_kssl7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary u_ahlubpw"/><g class="dt0cm9dhy primary"><path class="zrjey1bzk"/><path class="hv2uvbznp"/><path class="n4_kssl7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:semicolon-duo"} {...others} />);
}

export default Component;
