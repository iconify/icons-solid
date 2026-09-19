import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s69aqabod.css';
import '../../css/e/eak5yhtvh.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="s69aqabod"/><path class="eak5yhtvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:rss"} {...others} />);
}

export default Component;
