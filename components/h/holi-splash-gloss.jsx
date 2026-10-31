import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u1es_sd0l.css';
import '../../css/b/bw3my9j_s.css';
import '../../css/i/iunz_1kfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="u1es_sd0l wm-k"/><path class="bw3my9j_s wm-a"/><path class="iunz_1kfp wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:holi-splash-gloss"} {...others} />);
}

export default Component;
