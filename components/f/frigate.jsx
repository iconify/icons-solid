import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e5ys_6byi.css';
import '../../css/s/s6kk7juwe.css';
import '../../css/s/scyn38bvf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e5ys_6byi"/><path class="s6kk7juwe"/><path class="scyn38bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:frigate"} {...others} />);
}

export default Component;
