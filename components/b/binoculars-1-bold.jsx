import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wjjtetwqv.css';
import '../../css/k/k1ummubux.css';
import '../../css/k/k_dcn8ndg.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wjjtetwqv"/><path class="k1ummubux"/><path class="k_dcn8ndg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:binoculars-1-bold"} {...others} />);
}

export default Component;
