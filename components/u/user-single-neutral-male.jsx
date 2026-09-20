import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/ch-3webui.css';
import '../../css/o/ohqhwob9p.css';
import '../../css/m/ms_1nlb9c.css';
import '../../css/l/ld5bm6beq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ch-3webui"/><path class="ohqhwob9p"/><path class="ms_1nlb9c"/><path class="ld5bm6beq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-single-neutral-male"} {...others} />);
}

export default Component;
