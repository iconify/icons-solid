import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qu65g7ffq.css';
import '../../css/r/rr0x43b_g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="qu65g7ffq"/><path class="rr0x43b_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:auto-flash"} {...others} />);
}

export default Component;
