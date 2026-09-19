import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pvvsmq5js.css';
import '../../css/q/qn0962bda.css';
import '../../css/q/q8t0avbcn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="pvvsmq5js"/><path class="qn0962bda"/><circle class="q8t0avbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-app-open"} {...others} />);
}

export default Component;
