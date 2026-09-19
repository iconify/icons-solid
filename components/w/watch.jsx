import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dz34nf4-z.css';
import '../../css/k/kf4ztjbqq.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="dz34nf4-z"/><path class="kf4ztjbqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:watch"} {...others} />);
}

export default Component;
