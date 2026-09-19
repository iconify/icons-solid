import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/itmrxab9d.css';
import '../../css/u/ufbwy-b3b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="itmrxab9d"/><path class="ufbwy-b3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:thumbs-down"} {...others} />);
}

export default Component;
