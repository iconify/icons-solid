import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r-pirlb1i.css';
import '../../css/c/ci9fsyyqx.css';
import '../../css/m/meco3rogb.css';
import '../../css/s/s29ll1g5q.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r-pirlb1i"/><path class="ci9fsyyqx"/><path class="meco3rogb"/><path class="s29ll1g5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:cloud-down-filled"} {...others} />);
}

export default Component;
