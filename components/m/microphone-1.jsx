import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d0uc6wbmd.css';
import '../../css/c/c-vno9b3b.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="d0uc6wbmd"/><path class="c-vno9b3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:microphone-1"} {...others} />);
}

export default Component;
