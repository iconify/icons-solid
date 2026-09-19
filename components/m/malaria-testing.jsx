import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sosoipu2w.css';
import '../../css/x/xoik_o_ww.css';
import '../../css/y/yqckadb3a.css';
import '../../css/y/yyttgubvh.css';
import '../../css/b/bg4nq3btm.css';
import '../../css/r/rxwzis5kd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sosoipu2w"/><path class="xoik_o_ww"/><path clip-rule="evenodd" class="yqckadb3a"/><path class="yyttgubvh"/><path clip-rule="evenodd" class="bg4nq3btm"/><path class="rxwzis5kd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:malaria-testing"} {...others} />);
}

export default Component;
