import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brt534uak.css';
import '../../css/c/ce5riu44p.css';
import '../../css/w/wlw9pn3gb.css';
import '../../css/t/t_c0kmjlm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="brt534uak"/><path class="ce5riu44p"/><path class="wlw9pn3gb"/><path class="t_c0kmjlm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:laptop-pop"} {...others} />);
}

export default Component;
