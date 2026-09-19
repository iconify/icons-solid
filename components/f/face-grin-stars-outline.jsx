import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_ak5bbdo.css';
import '../../css/g/gxg0gv6fg.css';
import '../../css/i/ieosfnksq.css';
import '../../css/k/kdpnic1uz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s_ak5bbdo"/><path class="gxg0gv6fg"/><path class="ieosfnksq"/><path class="kdpnic1uz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:face-grin-stars-outline"} {...others} />);
}

export default Component;
