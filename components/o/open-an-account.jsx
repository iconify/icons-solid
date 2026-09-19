import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gyuogtbyx.css';
import '../../css/x/xqpxb2bhi.css';
import '../../css/s/sgoo-oy7b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="gyuogtbyx"/><circle class="xqpxb2bhi"/><path class="sgoo-oy7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:open-an-account"} {...others} />);
}

export default Component;
