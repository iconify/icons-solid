import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r4zm8ub_n.css';
import '../../css/t/tm2hi0b_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="r4zm8ub_n wm-k"/><path class="tm2hi0b_t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:certificate-gloss"} {...others} />);
}

export default Component;
