import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j-c7jrbjg.css';
import '../../css/r/rpo142ldj.css';
import '../../css/m/m7nojdb1m.css';
import '../../css/b/bbbfe9b_u.css';
import '../../css/d/dz_6hm4og.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="j-c7jrbjg"/><path class="rpo142ldj"/><path class="m7nojdb1m"/><path class="bbbfe9b_u"/><path class="dz_6hm4og"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shopping-basket-1"} {...others} />);
}

export default Component;
