import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/td-d9yzhb.css';
import '../../css/i/ijgvb2wsd.css';
import '../../css/g/gq_2ljbqh.css';
import '../../css/q/qhzl36msm.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="td-d9yzhb"/><path class="ijgvb2wsd"/><path class="gq_2ljbqh"/><path class="qhzl36msm"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:cloud-down-circle-off"} {...others} />);
}

export default Component;
