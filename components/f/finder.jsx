import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fruoy0-av.css';
import '../../css/l/lwmc7bbbb.css';
import '../../css/q/qlm0w-bmn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="fruoy0-av"/><path class="lwmc7bbbb"/><path class="qlm0w-bmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:finder"} {...others} />);
}

export default Component;
