import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nsb-dybut.css';
import '../../css/t/t2-k05b3r.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="nsb-dybut"/><path class="t2-k05b3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:sd-card"} {...others} />);
}

export default Component;
