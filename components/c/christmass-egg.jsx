import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j4wgzr7lu.css';
import '../../css/i/iha-1kb9g.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="j4wgzr7lu"/><path class="iha-1kb9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:christmass-egg"} {...others} />);
}

export default Component;
