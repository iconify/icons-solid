import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8flcdbca.css';
import '../../css/f/fftvyjblg.css';
import '../../css/c/ctxkj15yf.css';
import '../../css/y/yv95--bei.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k8flcdbca"/><path class="fftvyjblg"/><path class="ctxkj15yf"/><path class="yv95--bei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:keyboard-duo"} {...others} />);
}

export default Component;
