import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deb4wmkmp.css';
import '../../css/z/zoxgybcvs.css';
import '../../css/u/u6bmzrbba.css';
import '../../css/i/ir4q9tzxv.css';
import '../../css/m/m8cdysjau.css';
import '../../css/y/yr4w3tb4q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="deb4wmkmp"/><path class="zoxgybcvs"/><path class="u6bmzrbba"/><path class="ir4q9tzxv"/><path class="m8cdysjau"/><path class="yr4w3tb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smiley-drool"} {...others} />);
}

export default Component;
