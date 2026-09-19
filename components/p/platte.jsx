import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/ql2oftrja.css';
import '../../css/n/n75x16bgq.css';
import '../../css/j/j5l0kbiuf.css';
import '../../css/e/ejyqcr5od.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="ql2oftrja"/><path class="n75x16bgq"/><path class="j5l0kbiuf"/><path class="ejyqcr5od"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:platte"} {...others} />);
}

export default Component;
