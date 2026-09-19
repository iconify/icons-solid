import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtwlgebmd.css';
import '../../css/s/swjj-jb3z.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qtwlgebmd"/><path class="swjj-jb3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:seek-skip-duo"} {...others} />);
}

export default Component;
