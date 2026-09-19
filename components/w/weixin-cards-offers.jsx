import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bav9mgbzy.css';
import '../../css/s/sdxioac2w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="bav9mgbzy"/><path class="sdxioac2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:weixin-cards-offers"} {...others} />);
}

export default Component;
