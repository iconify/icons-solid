import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mz-_i50lp.css';
import '../../css/v/vvhgcpb1v.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="mz-_i50lp"/><path class="vvhgcpb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:button-plus"} {...others} />);
}

export default Component;
