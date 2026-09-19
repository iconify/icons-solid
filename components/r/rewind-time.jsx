import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qwkq50ycl.css';
import '../../css/p/p-nk8n_8e.css';
import '../../css/u/ul0qc4bzi.css';
import '../../css/r/rfj-albdt.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qwkq50ycl"/><path class="p-nk8n_8e"/><path class="ul0qc4bzi"/><path class="rfj-albdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:rewind-time"} {...others} />);
}

export default Component;
