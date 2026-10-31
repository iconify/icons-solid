import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dxt0i1bul.css';
import '../../css/s/sk4vu6bmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="dxt0i1bul wm-k"/><path class="sk4vu6bmp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rangoli-pattern-gloss"} {...others} />);
}

export default Component;
