import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xrq3b_jvc.css';
import '../../css/q/qkxyfyb7g.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="xrq3b_jvc"/><path class="qkxyfyb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cabin-cable"} {...others} />);
}

export default Component;
