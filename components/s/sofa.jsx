import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/e/edg1r3a0e.css';
import '../../css/q/qcs51wjjn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="edg1r3a0e"/><path class="qcs51wjjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sofa"} {...others} />);
}

export default Component;
