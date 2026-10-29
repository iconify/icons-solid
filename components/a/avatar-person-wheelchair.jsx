import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r8kz99blj.css';
import '../../css/k/k2_ouvben.css';
import '../../css/o/obop-kb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="r8kz99blj"/><path class="k2_ouvben wm-a"/><path class="obop-kb6d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-wheelchair"} {...others} />);
}

export default Component;
