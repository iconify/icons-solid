import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0du3hboe.css';
import '../../css/k/kw3akl4eq.css';
import '../../css/l/l_wahk1-s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="a0du3hboe"/><path class="kw3akl4eq"/><path class="l_wahk1-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:trophy-duo"} {...others} />);
}

export default Component;
