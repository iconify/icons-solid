import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jrn23ccbu.css';
import '../../css/o/ozbrujcbd.css';
import '../../css/r/rsai_abhp.css';
import '../../css/w/w62x13bmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jrn23ccbu"/><path class="ozbrujcbd wm-a"/><path class="rsai_abhp wm-a"/><path class="w62x13bmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:airplay-duo"} {...others} />);
}

export default Component;
