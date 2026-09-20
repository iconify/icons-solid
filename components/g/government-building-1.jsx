import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/na05s4bfg.css';
import '../../css/v/vav3g9fdq.css';
import '../../css/o/oxf2xqbqj.css';
import '../../css/a/ab7m81bmz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="na05s4bfg"/><path class="vav3g9fdq"/><path class="oxf2xqbqj"/><path class="ab7m81bmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:government-building-1"} {...others} />);
}

export default Component;
