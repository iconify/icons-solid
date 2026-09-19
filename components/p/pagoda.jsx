import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v81vt1b_c.css';
import '../../css/e/ef6l1eg-m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="v81vt1b_c"/><path class="ef6l1eg-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pagoda"} {...others} />);
}

export default Component;
