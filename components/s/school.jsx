import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/csv7r3b2q.css';
import '../../css/i/if54ilp2r.css';
import '../../css/b/b6qpo7bvh.css';
import '../../css/h/hat4q3btl.css';
import '../../css/j/jiwab4g6x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="csv7r3b2q"/><path class="if54ilp2r"/><path class="b6qpo7bvh"/><path class="hat4q3btl"/><path class="jiwab4g6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:school"} {...others} />);
}

export default Component;
