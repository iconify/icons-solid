import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xrfbgub3m.css';
import '../../css/r/r0lwmzbnm.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="xrfbgub3m"/><path class="r0lwmzbnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:folder-remove"} {...others} />);
}

export default Component;
