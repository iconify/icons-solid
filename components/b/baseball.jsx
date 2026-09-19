import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nv-adpsgj.css';
import '../../css/b/b2aw-grhr.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="nv-adpsgj"/><path class="b2aw-grhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:baseball"} {...others} />);
}

export default Component;
