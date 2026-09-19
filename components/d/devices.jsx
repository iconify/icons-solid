import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zv90fvb2w.css';
import '../../css/l/lar-c1ezo.css';
import '../../css/b/b0244z36l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zv90fvb2w"/><path class="lar-c1ezo"/><path class="b0244z36l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:devices"} {...others} />);
}

export default Component;
