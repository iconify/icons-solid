import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/o/oq8pnh08o.css';
import '../../css/b/bzck47bbc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="oq8pnh08o"/><path class="bzck47bbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:soccer"} {...others} />);
}

export default Component;
