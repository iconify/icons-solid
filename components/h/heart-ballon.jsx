import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dpw7iybqy.css';
import '../../css/l/lrhr39bkv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="dpw7iybqy"/><path class="lrhr39bkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:heart-ballon"} {...others} />);
}

export default Component;
