import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d_fbp5lsf.css';
import '../../css/m/mjxbpqbzk.css';
import '../../css/w/wyq16_b_v.css';
import '../../css/r/rk1exhmto.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d_fbp5lsf"/><path class="mjxbpqbzk"/><path class="wyq16_b_v"/><path class="rk1exhmto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:visual-blind"} {...others} />);
}

export default Component;
