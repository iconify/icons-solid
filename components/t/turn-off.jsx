import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/exlfgim7i.css';
import '../../css/y/y_ag9vb7d.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="exlfgim7i"/><path class="y_ag9vb7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:turn-off"} {...others} />);
}

export default Component;
