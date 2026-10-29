import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/se-jdubva.css';
import '../../css/s/sq9ejvb2i.css';
import '../../css/q/q-55d_bvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="se-jdubva"/><path class="sq9ejvb2i wm-a"/><path class="q-55d_bvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ticket-percent-duo"} {...others} />);
}

export default Component;
