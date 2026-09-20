import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1_vpwb1b.css';
import '../../css/l/lnj7h795l.css';
import '../../css/z/ztei60bop.css';
import '../../css/y/yrwvle5ag.css';
import '../../css/a/aemfi2bss.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/w/wb2qoxbey.css';
import '../../css/u/u765ig5fe.css';
import '../../css/u/ubm84vici.css';
import '../../css/g/ga_nwy3gz.css';
import '../../css/v/v01waabqs.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="m1_vpwb1b"/><path class="lnj7h795l"/><path class="ztei60bop"/><circle class="yrwvle5ag"/><circle class="aemfi2bss"/><g class="brzn_0bpr"><path class="wb2qoxbey"/><circle class="u765ig5fe"/><circle class="ubm84vici"/><path class="ga_nwy3gz"/><rect class="v01waabqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cinema"} {...others} />);
}

export default Component;
