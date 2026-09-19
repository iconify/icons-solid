import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g-1sctb2h.css';
import '../../css/p/pulbykzuj.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="g-1sctb2h"/><path class="pulbykzuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:suitcase-person"} {...others} />);
}

export default Component;
