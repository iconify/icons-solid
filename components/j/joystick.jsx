import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/r/rvb0ecciq.css';
import '../../css/z/zc12q-tey.css';
import '../../css/q/q5x6vbm6s.css';
import '../../css/v/vrp-fq-_z.css';
import '../../css/e/eqfrutbju.css';
import '../../css/t/tewlxdbia.css';
import '../../css/h/hjd4kuzyp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="rvb0ecciq"/><path class="zc12q-tey"/><path class="q5x6vbm6s"/><path class="vrp-fq-_z"/><path class="eqfrutbju"/><path class="tewlxdbia"/><path class="hjd4kuzyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:joystick"} {...others} />);
}

export default Component;
