import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/q/qtronmbrp.css';
import '../../css/q/qgs0z25hz.css';
import '../../css/d/d9p6bbcsl.css';
import '../../css/q/qv25c6b5t.css';
import '../../css/u/uvh1nac5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="qtronmbrp wm-k"/><path class="qgs0z25hz wm-k"/><path class="d9p6bbcsl wm-k"/><circle class="qv25c6b5t wm-s"/><path class="uvh1nac5v wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tennis-blueprint"} {...others} />);
}

export default Component;
