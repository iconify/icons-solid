import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/jsh0_l8ru.css';
import '../../css/n/n010z5fzb.css';
import '../../css/p/p_n804c0c.css';
import '../../css/d/dp8svdbnt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="jsh0_l8ru"/><path class="n010z5fzb"/><path class="p_n804c0c"/><path class="dp8svdbnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:graph-bar-increase"} {...others} />);
}

export default Component;
