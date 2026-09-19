import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lxvqukbdn.css';
import '../../css/e/ed53m5bsg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="lxvqukbdn"/><rect class="ed53m5bsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shovel"} {...others} />);
}

export default Component;
