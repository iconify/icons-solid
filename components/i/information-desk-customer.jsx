import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-sot3bpq.css';
import '../../css/i/ilb0nnxnl.css';
import '../../css/s/s898bsq2z.css';
import '../../css/f/fihio3brb.css';
import '../../css/z/zg61fubyi.css';
import '../../css/p/p96jelb-k.css';
import '../../css/p/p38lp8b6t.css';
import '../../css/x/xs-vqobxq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="w-sot3bpq"/><path class="ilb0nnxnl"/><path class="s898bsq2z"/><path class="fihio3brb"/><path class="zg61fubyi"/><path class="p96jelb-k"/><path class="p38lp8b6t"/><path class="xs-vqobxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:information-desk-customer"} {...others} />);
}

export default Component;
