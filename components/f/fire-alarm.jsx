import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r2-bl-j_m.css';
import '../../css/k/k0bkxgbzs.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="r2-bl-j_m"/><path class="k0bkxgbzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:fire-alarm"} {...others} />);
}

export default Component;
