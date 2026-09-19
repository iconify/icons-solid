import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zn0dbsspf.css';
import '../../css/h/hdkg49b6e.css';
import '../../css/z/znts8wbcy.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="zn0dbsspf"/><path class="hdkg49b6e"/><path class="znts8wbcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:dropbox"} {...others} />);
}

export default Component;
