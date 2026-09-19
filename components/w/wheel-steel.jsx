import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cj37cfdcm.css';
import '../../css/b/bt02zq94i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="cj37cfdcm"/><path class="bt02zq94i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:wheel-steel"} {...others} />);
}

export default Component;
