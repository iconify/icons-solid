import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wi-dq8bor.css';
import '../../css/p/php4bw5yx.css';
import '../../css/t/tq30inb_n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="wi-dq8bor"/><path class="php4bw5yx"/><path class="tq30inb_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:target"} {...others} />);
}

export default Component;
