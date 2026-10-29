import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxzez7b_v.css';
import '../../css/s/sa6nsupag.css';
import '../../css/l/lctj6yb0n.css';
import '../../css/p/pexifjy-d.css';
import '../../css/p/pzy-jzb4u.css';
import '../../css/w/wev8eucna.css';
import '../../css/x/xgdg799md.css';
import '../../css/g/gwui7vbdy.css';
import '../../css/b/b480dsbhf.css';
import '../../css/r/rt_i9qb3w.css';
import '../../css/x/xrevvq96m.css';
import '../../css/n/nrqzprbmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mxzez7b_v wm-shadow"/><path class="sa6nsupag wm-shadow"/><path class="lctj6yb0n"/><path class="pexifjy-d"/><path class="pzy-jzb4u"/><path class="wev8eucna"/><path class="xgdg799md"/><path class="gwui7vbdy"/><path class="b480dsbhf"/><path class="rt_i9qb3w"/><path class="xrevvq96m"/><path class="nrqzprbmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:phone"} {...others} />);
}

export default Component;
