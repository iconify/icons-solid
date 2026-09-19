import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/w/wfnpsobxi.css';
import '../../css/d/d_q9ekb2u.css';
import '../../css/i/im3frobym.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="wfnpsobxi"/><path class="d_q9ekb2u"/><path class="im3frobym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chili"} {...others} />);
}

export default Component;
