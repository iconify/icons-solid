import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/ifzuak1gc.css';
import '../../css/n/nts83s09d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ifzuak1gc"/><path clip-rule="evenodd" class="nts83s09d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hand-right"} {...others} />);
}

export default Component;
