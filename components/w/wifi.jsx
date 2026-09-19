import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1hllwb4u.css';
import '../../css/b/bdscbjcnj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><circle class="y1hllwb4u"/><path class="bdscbjcnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:wifi"} {...others} />);
}

export default Component;
