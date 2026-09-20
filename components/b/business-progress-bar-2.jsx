import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/cr0c0t24e.css';
import '../../css/v/v0brx5bqi.css';
import '../../css/w/wukm_ub6v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="cr0c0t24e"/><path class="v0brx5bqi"/><path class="wukm_ub6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:business-progress-bar-2"} {...others} />);
}

export default Component;
