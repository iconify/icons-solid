import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wqbupoblz.css';
import '../../css/b/bazsypdie.css';
import '../../css/q/q_ropdxur.css';
import '../../css/y/yixj39qvu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wqbupoblz"/><path class="bazsypdie"/><path class="q_ropdxur"/><path class="yixj39qvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:film-slate"} {...others} />);
}

export default Component;
