import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5_9cmqso.css';
import '../../css/b/b-kapix5d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="e5_9cmqso"/><path class="b-kapix5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:comment-add-duo"} {...others} />);
}

export default Component;
