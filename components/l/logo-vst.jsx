import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hygzc7f2b.css';
import '../../css/d/dxvxrfbem.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="hygzc7f2b"/><path class="dxvxrfbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-vst"} {...others} />);
}

export default Component;
