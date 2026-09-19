import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/riw1v_byq.css';
import '../../css/m/mf2qu3btp.css';
import '../../css/c/cl-hypbvk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="riw1v_byq"/><path class="mf2qu3btp"/><path class="cl-hypbvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:watch-fitness-duo"} {...others} />);
}

export default Component;
