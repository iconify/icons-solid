import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h463sbbfs.css';
import '../../css/r/rp6fnacut.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="h463sbbfs"/><path class="rp6fnacut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:file-upload"} {...others} />);
}

export default Component;
