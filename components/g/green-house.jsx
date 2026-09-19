import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/z8k3wpjor.css';
import '../../css/e/exv_z3ber.css';
import '../../css/j/jc6szvbud.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="z8k3wpjor"/><path class="exv_z3ber"/><path class="jc6szvbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:green-house"} {...others} />);
}

export default Component;
