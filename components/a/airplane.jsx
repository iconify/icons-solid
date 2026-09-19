import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zng0uibdx.css';
import '../../css/m/mjwxlvbsh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="zng0uibdx"/><path class="mjwxlvbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:airplane"} {...others} />);
}

export default Component;
