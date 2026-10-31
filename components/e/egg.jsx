import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hndf-3qju.css';
import '../../css/e/ee9kg0bqi.css';
import '../../css/m/mda06bc7q.css';
import '../../css/m/mqsh72bjv.css';
import '../../css/c/c4ksgpbtr.css';
import '../../css/s/s-qq3x6_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hndf-3qju wm-shadow"/><path class="ee9kg0bqi"/><path class="mda06bc7q"/><path class="mqsh72bjv"/><path class="c4ksgpbtr"/><path class="s-qq3x6_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:egg"} {...others} />);
}

export default Component;
