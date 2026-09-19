import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zbfs8xbpm.css';
import '../../css/s/seet9jexv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zbfs8xbpm"/><path class="seet9jexv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:edit-two"} {...others} />);
}

export default Component;
