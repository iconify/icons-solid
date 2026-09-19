import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/evl2mxjzg.css';
import '../../css/m/mj_4jsyjn.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="evl2mxjzg"/><path class="mj_4jsyjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:wallet"} {...others} />);
}

export default Component;
