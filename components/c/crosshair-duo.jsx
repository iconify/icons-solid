import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p8ue_zwas.css';
import '../../css/d/d4rt0lb-l.css';
import '../../css/z/zc2m5bbql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="p8ue_zwas"/><path class="d4rt0lb-l wm-a"/><path class="zc2m5bbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crosshair-duo"} {...others} />);
}

export default Component;
