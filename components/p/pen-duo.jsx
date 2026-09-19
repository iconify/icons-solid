import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s90gfib_t.css';
import '../../css/y/y2tqzkb2v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="s90gfib_t"/><path class="y2tqzkb2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pen-duo"} {...others} />);
}

export default Component;
