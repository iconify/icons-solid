import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/txwri8bqr.css';
import '../../css/c/cxmrq_y6k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="txwri8bqr"/><path class="cxmrq_y6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:ubq"} {...others} />);
}

export default Component;
