import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/w14uhobpy.css';
import '../../css/y/yltrj23_b.css';
import '../../css/p/pzuea-bjd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="w14uhobpy"/><path class="yltrj23_b"/><path class="pzuea-bjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:trace"} {...others} />);
}

export default Component;
