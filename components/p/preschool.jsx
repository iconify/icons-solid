import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/r/rtufjx68u.css';
import '../../css/l/lc6uosh-o.css';
import '../../css/o/o_9d69bqp.css';
import '../../css/j/jp1slkr9d.css';
import '../../css/p/pxpblgbkl.css';
import '../../css/l/lcb8g-b-k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="rtufjx68u"/><path class="lc6uosh-o"/><path class="o_9d69bqp"/><path class="jp1slkr9d"/><path class="pxpblgbkl"/><path class="lcb8g-b-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:preschool"} {...others} />);
}

export default Component;
