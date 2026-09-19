import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/elph5ybyo.css';
import '../../css/k/kjs__f0kv.css';
import '../../css/e/e6zwirbum.css';

const viewBox = {"width":16,"height":17};
const content = `<g class="n1lsf0bnc"><path class="elph5ybyo"/><path class="kjs__f0kv"/><path class="e6zwirbum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:money-3"} {...others} />);
}

export default Component;
