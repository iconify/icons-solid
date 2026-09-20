import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/utcbjgb3m.css';
import '../../css/j/jnkvmy8_z.css';
import '../../css/t/tgamz65gg.css';
import '../../css/h/hhzxuac5i.css';
import '../../css/g/g46iv2b3b.css';
import '../../css/r/rh4wu8b3l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="utcbjgb3m"/><path class="jnkvmy8_z"/><path class="tgamz65gg"/><path class="hhzxuac5i"/><path class="g46iv2b3b"/><path class="rh4wu8b3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:gallery-2"} {...others} />);
}

export default Component;
