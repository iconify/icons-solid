import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/d/dmxowublm.css';
import '../../css/y/ypqd66g9c.css';
import '../../css/t/tx_i2ab4h.css';
import '../../css/z/z_5k53bfn.css';
import '../../css/w/w4n8umbjl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="dmxowublm"/><path class="ypqd66g9c"/><path class="tx_i2ab4h"/><path class="z_5k53bfn"/><path class="w4n8umbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:croissant"} {...others} />);
}

export default Component;
