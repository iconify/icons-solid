import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2mq87bfm.css';
import '../../css/x/x4lmx--2r.css';
import '../../css/s/sk-8x1bcz.css';
import '../../css/e/e35mr7bhf.css';
import '../../css/d/ds2yc2b1f.css';
import '../../css/e/ea0n5bcgg.css';
import '../../css/n/nagienb9f.css';
import '../../css/q/qbsz-mbru.css';
import '../../css/t/t1kt9dvpb.css';
import '../../css/v/vavb1sm9h.css';
import '../../css/p/pdxt2kdkq.css';
import '../../css/n/n10l3vbfg.css';
import '../../css/w/w7is-9bfl.css';
import '../../css/t/tv529fwsd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="r2mq87bfm"/><path class="x4lmx--2r"/><path class="sk-8x1bcz"/><path class="e35mr7bhf"/><path class="ds2yc2b1f"/><path class="ea0n5bcgg"/><path class="nagienb9f"/><path class="qbsz-mbru"/><path class="t1kt9dvpb"/><path class="vavb1sm9h"/><path class="pdxt2kdkq"/><path class="n10l3vbfg"/><path class="w7is-9bfl"/><path class="tv529fwsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:circus-tent"} {...others} />);
}

export default Component;
