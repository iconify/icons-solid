import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pticqkbsn.css';
import '../../css/q/qyzqtj_zn.css';
import '../../css/o/o62d_4cwa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="pticqkbsn"/><path class="qyzqtj_zn"/><path class="o62d_4cwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-with-white-cane-facing-right"} {...others} />);
}

export default Component;
