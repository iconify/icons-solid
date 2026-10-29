import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qsx-i1f6n.css';
import '../../css/u/u9j9k8igd.css';
import '../../css/k/k5v3mxbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qsx-i1f6n wm-k"/><path class="u9j9k8igd wm-k"/><path class="k5v3mxbhe wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:split"} {...others} />);
}

export default Component;
