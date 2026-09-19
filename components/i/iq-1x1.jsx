import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw9rmcz9o.css';
import '../../css/u/u-bp7mb3x.css';
import '../../css/z/zaosl5byf.css';
import '../../css/s/sig_pk1ng.css';
import '../../css/x/x3u30gbsb.css';
import '../../css/z/zgf4lb5wb.css';
import '../../css/e/egd19hbfj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aw9rmcz9o"/><path class="u-bp7mb3x"/><path class="zaosl5byf"/><g transform="translate(-276.6 -99)scale(1.8686)" class="sig_pk1ng"><path class="x3u30gbsb"/><circle class="zgf4lb5wb"/><path class="egd19hbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:iq-1x1"} {...others} />);
}

export default Component;
