import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tl8r9hb7v.css';
import '../../css/b/bf_kh14so.css';
import '../../css/o/ok_dmqrra.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path clip-rule="evenodd" class="tl8r9hb7v"/><path class="bf_kh14so"/><path class="ok_dmqrra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cooking-pot"} {...others} />);
}

export default Component;
