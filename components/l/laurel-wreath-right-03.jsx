import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iidlc_bzb.css';
import '../../css/x/x1tloy_uw.css';
import '../../css/c/c8bbmgmhk.css';
import '../../css/w/wou46vbgj.css';
import '../../css/p/p8d-2f0oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="iidlc_bzb"/><path class="x1tloy_uw"/><path class="c8bbmgmhk"/><path class="wou46vbgj"/><path class="p8d-2f0oa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:laurel-wreath-right-03"} {...others} />);
}

export default Component;
