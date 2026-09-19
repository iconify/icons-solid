import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g6cwcf8-e.css';
import '../../css/i/il16k2_9s.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="g6cwcf8-e"/><path class="il16k2_9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:button-error"} {...others} />);
}

export default Component;
