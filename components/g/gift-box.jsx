import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/ec5u8ubjb.css';
import '../../css/y/ylfjxbcbp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ec5u8ubjb"/><path class="ylfjxbcbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gift-box"} {...others} />);
}

export default Component;
