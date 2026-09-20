import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jrybhdcyu.css';
import '../../css/e/e1c8dcbsl.css';
import '../../css/v/vbo1dqbwo.css';
import '../../css/m/mpskmzk8x.css';
import '../../css/w/wx17bz8dg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jrybhdcyu"/><path class="e1c8dcbsl"/><path class="vbo1dqbwo"/><path class="mpskmzk8x"/><path class="wx17bz8dg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:watch-circle-menu"} {...others} />);
}

export default Component;
