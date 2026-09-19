import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn2vh5b-t.css';
import '../../css/l/l59o3ubcg.css';
import '../../css/q/qd_vzbm9l.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="nn2vh5b-t"/><path class="l59o3ubcg"/><path class="qd_vzbm9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:zoom-out"} {...others} />);
}

export default Component;
