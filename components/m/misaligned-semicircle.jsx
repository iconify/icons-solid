import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hpdci4s6c.css';
import '../../css/j/jcslofkgd.css';
import '../../css/n/n96dz4x6k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hpdci4s6c"/><path class="jcslofkgd"/><path class="n96dz4x6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:misaligned-semicircle"} {...others} />);
}

export default Component;
