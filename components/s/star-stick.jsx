import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ej8r1sbkb.css';
import '../../css/s/s87qpyiov.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ej8r1sbkb"/><path class="s87qpyiov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:star-stick"} {...others} />);
}

export default Component;
