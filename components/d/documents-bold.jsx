import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/od6evsbxr.css';
import '../../css/f/fp06y8bqm.css';
import '../../css/r/rsvmd3nqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="od6evsbxr"/><path class="fp06y8bqm"/><path class="rsvmd3nqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:documents-bold"} {...others} />);
}

export default Component;
