import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/n3ei5ab_h.css';
import '../../css/q/qcs51wjjn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="n3ei5ab_h"/><path class="qcs51wjjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sofa"} {...others} />);
}

export default Component;
