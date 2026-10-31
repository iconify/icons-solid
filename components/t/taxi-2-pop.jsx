import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/i/ivg9rsb9x.css';
import '../../css/a/avxpu5sek.css';
import '../../css/c/ckbithmkp.css';
import '../../css/b/bfdv9vv0y.css';
import '../../css/f/fm1ryyu2s.css';
import '../../css/q/qdp7qabsu.css';
import '../../css/t/tbs4bdcnp.css';
import '../../css/s/s2n577dud.css';
import '../../css/o/oy7l579_l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="ivg9rsb9x"/><path class="avxpu5sek"/><path class="ckbithmkp"/><path class="bfdv9vv0y"/><path class="fm1ryyu2s"/><path class="qdp7qabsu"/><path class="tbs4bdcnp"/><path class="s2n577dud"/><path class="oy7l579_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:taxi-2-pop"} {...others} />);
}

export default Component;
