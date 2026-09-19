import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hemnfj98r.css';
import '../../css/o/ofs51p39o.css';
import '../../css/z/z83pfsbxg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="hemnfj98r"/><path class="ofs51p39o"/><path class="z83pfsbxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:alarm-clock"} {...others} />);
}

export default Component;
