import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ub98xnbuw.css';
import '../../css/x/xq2l1qbqf.css';
import '../../css/t/trs46fegq.css';
import '../../css/b/b2p6fabrz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ub98xnbuw"/><path class="xq2l1qbqf"/><path class="trs46fegq"/><path class="b2p6fabrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:dollar-increase"} {...others} />);
}

export default Component;
