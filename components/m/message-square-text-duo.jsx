import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pjocyqddu.css';
import '../../css/m/md4tcwb_p.css';
import '../../css/e/ee_t7pb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pjocyqddu"/><path class="md4tcwb_p wm-a"/><path class="ee_t7pb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-square-text-duo"} {...others} />);
}

export default Component;
