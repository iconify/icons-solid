import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qs8_8gyor.css';
import '../../css/w/w6f93ubgc.css';
import '../../css/z/zqsykkb_l.css';
import '../../css/d/d_p9auxlb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qs8_8gyor"/><path class="w6f93ubgc"/><path class="zqsykkb_l"/><path class="d_p9auxlb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-3-duo"} {...others} />);
}

export default Component;
