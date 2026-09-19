import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jb6j1ybag.css';
import '../../css/e/e5wgdrsfy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jb6j1ybag"/><path class="e5wgdrsfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bachelor-cap"} {...others} />);
}

export default Component;
