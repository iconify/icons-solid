import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r00m7gbsq.css';
import '../../css/b/b-1xmhblp.css';
import '../../css/e/e17mij6_y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r00m7gbsq"/><path class="b-1xmhblp"/><path class="e17mij6_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-withdrawal-one"} {...others} />);
}

export default Component;
