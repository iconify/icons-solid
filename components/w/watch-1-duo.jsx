import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1a_9_jpm.css';
import '../../css/t/tcrwktbxz.css';
import '../../css/j/j8h34ia8c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="m1a_9_jpm"/><path class="tcrwktbxz"/><path class="j8h34ia8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:watch-1-duo"} {...others} />);
}

export default Component;
