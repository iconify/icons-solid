import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bty7goz2u.css';
import '../../css/y/y4wajacpa.css';
import '../../css/h/hbz7a9b5r.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="bty7goz2u"/><path class="y4wajacpa"/><path class="hbz7a9b5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:sign-board"} {...others} />);
}

export default Component;
