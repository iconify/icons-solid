import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b_qmisawt.css';
import '../../css/d/d4q-g1b9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="b_qmisawt wm-k"/><path class="d4q-g1b9d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-first-gloss"} {...others} />);
}

export default Component;
