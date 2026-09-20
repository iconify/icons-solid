import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b06lthj3q.css';
import '../../css/n/n53p5tb4g.css';
import '../../css/w/ww44234at.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/iqcnmwb8n.css';
import '../../css/w/wcq5hacko.css';
import '../../css/i/i__1fp6bh.css';
import '../../css/e/e5bfsusbk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b06lthj3q"/><path class="n53p5tb4g"/><path class="ww44234at"/><g class="ij2x_72vy"><path class="iqcnmwb8n"/><path class="wcq5hacko"/><path class="i__1fp6bh"/><path class="e5bfsusbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:doe"} {...others} />);
}

export default Component;
