import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/ww5hx6beq.css';
import '../../css/r/r2vuxvbse.css';
import '../../css/m/mjugc6i_m.css';
import '../../css/n/newjsub2a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ww5hx6beq"/><path class="r2vuxvbse"/><path class="mjugc6i_m"/><path class="newjsub2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:module"} {...others} />);
}

export default Component;
