import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nprab3b2b.css';
import '../../css/x/xkyb60bfj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="nprab3b2b"/><path class="xkyb60bfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:checkerboard"} {...others} />);
}

export default Component;
