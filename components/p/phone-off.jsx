import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zjn2vi3mu.css';
import '../../css/a/ajngoxb4y.css';
import '../../css/t/tzirhqbqi.css';
import '../../css/l/l_fhmz-ti.css';
import '../../css/m/mu4rs6boa.css';
import '../../css/m/m1liex_ui.css';
import '../../css/g/gm9f2skze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zjn2vi3mu"/><path class="ajngoxb4y"/><path class="tzirhqbqi"/><path class="l_fhmz-ti"/><path class="mu4rs6boa"/><path class="m1liex_ui"/><path class="gm9f2skze wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:phone-off"} {...others} />);
}

export default Component;
