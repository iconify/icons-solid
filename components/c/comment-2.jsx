import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbrmr6bbt.css';
import '../../css/b/b63-0qqnv.css';
import '../../css/h/h_macgb-z.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jbrmr6bbt"/><path class="b63-0qqnv"/><rect class="h_macgb-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:comment-2"} {...others} />);
}

export default Component;
