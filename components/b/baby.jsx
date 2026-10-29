import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c5n36ubcc.css';
import '../../css/l/ldovgsxiw.css';
import '../../css/k/k_t8b8b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c5n36ubcc"/><path class="ldovgsxiw"/><path class="k_t8b8b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:baby"} {...others} />);
}

export default Component;
