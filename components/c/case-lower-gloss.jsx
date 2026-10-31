import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/ssy4zeb1u.css';
import '../../css/e/e7aersbsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ssy4zeb1u wm-k"/><path class="e7aersbsb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:case-lower-gloss"} {...others} />);
}

export default Component;
