import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/teym6dbao.css';
import '../../css/c/cx4p_crli.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="teym6dbao"/><path class="cx4p_crli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:blood-bag"} {...others} />);
}

export default Component;
