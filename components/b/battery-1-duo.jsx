import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qs8_8gyor.css';
import '../../css/c/cwxewbz_z.css';
import '../../css/z/zqsykkb_l.css';
import '../../css/v/vsj6npbjq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qs8_8gyor"/><path class="cwxewbz_z"/><path class="zqsykkb_l"/><path class="vsj6npbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-1-duo"} {...others} />);
}

export default Component;
