import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/imiakvw_g.css';
import '../../css/t/tu_4g2b_u.css';
import '../../css/g/gg_32isdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="imiakvw_g"/><path class="tu_4g2b_u wm-a"/><path class="gg_32isdr wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:users-plus-solid"} {...others} />);
}

export default Component;
