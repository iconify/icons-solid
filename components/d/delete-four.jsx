import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b5kbnzv_b.css';
import '../../css/l/lprzjlbem.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="b5kbnzv_b"/><path class="lprzjlbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:delete-four"} {...others} />);
}

export default Component;
