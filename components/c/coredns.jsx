import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejah5wb8t.css';
import '../../css/a/ak-zl1bmx.css';
import '../../css/l/lwgz9wbyv.css';
import '../../css/b/bg0n9ce8h.css';
import '../../css/n/nihi12o8f.css';
import '../../css/v/vogq-dq-r.css';
import '../../css/j/jpzhstbsf.css';
import '../../css/c/cvdyevboh.css';
import '../../css/e/eqdph-b6p.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGBzmOjeRK" x1="118.5" x2="377.9" y1="385.7" y2="126.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="ejah5wb8t"/><stop offset=".21" class="ak-zl1bmx"/><stop offset=".52" class="lwgz9wbyv"/><stop offset=".9" class="bg0n9ce8h"/><stop offset="1" class="nihi12o8f"/></linearGradient><path fill="url(#SVGBzmOjeRK)" class="vogq-dq-r"/><path class="jpzhstbsf"/><path class="cvdyevboh"/><path class="eqdph-b6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:coredns"} {...others} />);
}

export default Component;
