import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yh4u_ebqb.css';
import '../../css/z/zfk710zuz.css';
import '../../css/w/w2suxlfee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yh4u_ebqb"/><path class="zfk710zuz"/><path class="w2suxlfee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:save"} {...others} />);
}

export default Component;
