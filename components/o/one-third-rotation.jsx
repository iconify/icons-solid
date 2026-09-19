import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r5_m18j1a.css';
import '../../css/k/kz6k1fb0q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="r5_m18j1a"/><path class="kz6k1fb0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:one-third-rotation"} {...others} />);
}

export default Component;
