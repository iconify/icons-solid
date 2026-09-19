import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e6x_babbs.css';
import '../../css/w/w2-_16bmo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e6x_babbs"/><path class="w2-_16bmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:magnet"} {...others} />);
}

export default Component;
