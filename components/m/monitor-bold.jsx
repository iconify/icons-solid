import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/f/fi_edld4q.css';
import '../../css/j/jh5ifwous.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="pr52f_b5y"><path class="fi_edld4q"/><path class="jh5ifwous"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:monitor-bold"} {...others} />);
}

export default Component;
