import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrx-whwks.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/ha4_9m1_p.css';
import '../../css/n/nyaxwelsj.css';
import '../../css/x/xgg-uc19w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mrx-whwks secondary"/><g class="dt0cm9dhy primary"><path class="ha4_9m1_p"/><path class="nyaxwelsj"/><path class="xgg-uc19w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:moon-sparkles-duo"} {...others} />);
}

export default Component;
