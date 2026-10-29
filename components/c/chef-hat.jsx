import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqx04acdk.css';
import '../../css/y/y86bihz2u.css';
import '../../css/e/ebuou-tqy.css';
import '../../css/a/anptp70pv.css';
import '../../css/i/i_kudcbtz.css';
import '../../css/u/ux_a-9btb.css';
import '../../css/q/qzl33y2_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sqx04acdk wm-k"/><path class="wm-k y86bihz2u"/><path class="ebuou-tqy wm-k"/><path class="anptp70pv wm-k"/><path class="i_kudcbtz wm-a"/><path class="ux_a-9btb wm-a"/><path class="qzl33y2_g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chef-hat"} {...others} />);
}

export default Component;
