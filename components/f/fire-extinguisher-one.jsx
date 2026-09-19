import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/f7eqgsbzj.css';
import '../../css/p/pot_04b4h.css';
import '../../css/f/ff2lwxprz.css';
import '../../css/j/jtilm806p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="f7eqgsbzj"/><path class="pot_04b4h"/><path class="ff2lwxprz"/><path class="jtilm806p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:fire-extinguisher-one"} {...others} />);
}

export default Component;
