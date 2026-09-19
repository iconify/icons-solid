import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sltdjjb5l.css';
import '../../css/y/yf6in5e9j.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="sltdjjb5l"/><path class="yf6in5e9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:stele"} {...others} />);
}

export default Component;
