import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nqrnje_3q.css';
import '../../css/q/q-xh5rbej.css';
import '../../css/y/y457fbf-u.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="nqrnje_3q"/><path class="q-xh5rbej"/><path class="y457fbf-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:disc-error"} {...others} />);
}

export default Component;
