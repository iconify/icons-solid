import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/ya2a54bmq.css';
import '../../css/x/xco40y0nr.css';
import '../../css/l/lwqu5ebiq.css';
import '../../css/b/bp-fc43ol.css';
import '../../css/t/talgakb_z.css';
import '../../css/c/cy3plyxvp.css';
import '../../css/y/yf-e7hbum.css';
import '../../css/p/pcrtnqpyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><ellipse class="ya2a54bmq"/><path class="xco40y0nr"/><path class="lwqu5ebiq"/><path class="bp-fc43ol"/><path class="talgakb_z"/><ellipse class="cy3plyxvp"/><path class="yf-e7hbum"/><path class="pcrtnqpyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:funds"} {...others} />);
}

export default Component;
