import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg_uw4bbt.css';
import '../../css/h/hl8kpsgmd.css';
import '../../css/w/wr7w3bc1d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="jg_uw4bbt"/><path class="hl8kpsgmd"/><path class="wr7w3bc1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-construction-worker"} {...others} />);
}

export default Component;
