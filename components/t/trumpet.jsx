import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l8xk6kbgp.css';
import '../../css/b/bd13yxb1u.css';
import '../../css/e/eyowyccos.css';
import '../../css/n/n74rnsbwl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="l8xk6kbgp"/><path class="bd13yxb1u"/><path class="eyowyccos"/><path class="n74rnsbwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:trumpet"} {...others} />);
}

export default Component;
