import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rax4y2a-p.css';
import '../../css/f/fxvc95tkh.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="rax4y2a-p"/><path class="fxvc95tkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:document-music"} {...others} />);
}

export default Component;
