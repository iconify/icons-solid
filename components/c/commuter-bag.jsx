import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e08nudb7u.css';
import '../../css/j/jko62d5uy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e08nudb7u"/><rect class="jko62d5uy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:commuter-bag"} {...others} />);
}

export default Component;
