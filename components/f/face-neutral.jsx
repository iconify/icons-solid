import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u4l0vjnhk.css';
import '../../css/u/ujkx2actq.css';
import '../../css/g/gcoa79bur.css';
import '../../css/j/jp0ue7rnb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><circle class="u4l0vjnhk"/><circle class="ujkx2actq"/><path class="gcoa79bur"/><path class="jp0ue7rnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:face-neutral"} {...others} />);
}

export default Component;
