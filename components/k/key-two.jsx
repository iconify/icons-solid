import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/t/tf-qccb0k.css';
import '../../css/j/jeiznpbiv.css';
import '../../css/t/t5qtf7vmx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="tf-qccb0k"/><path class="jeiznpbiv"/><path class="t5qtf7vmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:key-two"} {...others} />);
}

export default Component;
