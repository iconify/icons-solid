import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xofz_hqhq.css';
import '../../css/f/fty-rfbpv.css';
import '../../css/l/lkdhn-3lv.css';
import '../../css/z/zq5hs3bgd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xofz_hqhq"/><path class="fty-rfbpv"/><path class="lkdhn-3lv"/><path class="zq5hs3bgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rssbox"} {...others} />);
}

export default Component;
