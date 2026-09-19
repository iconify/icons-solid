import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o1_3dvb8s.css';
import '../../css/t/t8dy76v2z.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="o1_3dvb8s"/><path class="t8dy76v2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:time-reload"} {...others} />);
}

export default Component;
