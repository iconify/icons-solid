import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/x/xkbdowbeh.css';
import '../../css/v/vtaxl2b_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="xkbdowbeh"/><path class="vtaxl2b_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:work-from-home-user-sofa"} {...others} />);
}

export default Component;
