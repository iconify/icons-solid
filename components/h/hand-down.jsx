import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/indk_2-qu.css';
import '../../css/s/sm85w8b7f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="indk_2-qu"/><path clip-rule="evenodd" class="sm85w8b7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hand-down"} {...others} />);
}

export default Component;
