import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tizeyw84l.css';
import '../../css/b/b-z7etbjj.css';
import '../../css/r/ro45_bbvj.css';
import '../../css/z/z0kd6t3kr.css';
import '../../css/c/cgm98wbst.css';
import '../../css/u/uooj9_soa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tizeyw84l"/><path class="b-z7etbjj"/><path class="ro45_bbvj wm-shine"/><path class="wm-k z0kd6t3kr"/><path class="cgm98wbst wm-a"/><path class="uooj9_soa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:dhak"} {...others} />);
}

export default Component;
