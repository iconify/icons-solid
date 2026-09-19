import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qsfrybc2n.css';
import '../../css/b/bewmr-tqu.css';
import '../../css/b/b_zoysbpp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="qsfrybc2n"/><path class="bewmr-tqu"/><path class="b_zoysbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:drone-one"} {...others} />);
}

export default Component;
