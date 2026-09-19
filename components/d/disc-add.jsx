import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dk4lbjj-y.css';
import '../../css/g/gld1qdb9x.css';
import '../../css/y/y457fbf-u.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="dk4lbjj-y"/><path class="gld1qdb9x"/><path class="y457fbf-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:disc-add"} {...others} />);
}

export default Component;
