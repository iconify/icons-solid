import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6gk62thv.css';
import '../../css/o/o-yv5-6_q.css';
import '../../css/b/b-zzmab3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c6gk62thv"/><path class="o-yv5-6_q"/><path class="b-zzmab3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-star"} {...others} />);
}

export default Component;
