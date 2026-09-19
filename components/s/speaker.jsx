import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/llcnvrb_r.css';
import '../../css/l/lu23enbij.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="llcnvrb_r"/><path class="lu23enbij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:speaker"} {...others} />);
}

export default Component;
