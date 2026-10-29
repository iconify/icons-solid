import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mpjv9lo5z.css';
import '../../css/r/r-y_eqbgp.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/w/wo_o1s1tj.css';
import '../../css/n/naeb0abdw.css';
import '../../css/c/clf7bkh7f.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mpjv9lo5z wm-k"/><path class="r-y_eqbgp wm-a"/><path class="ol-kpp5cg wm-s"/><path class="wm-shadow wo_o1s1tj"/><path class="naeb0abdw wm-k"/><path class="clf7bkh7f wm-a"/><path class="qr4ochb5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:image-off-engrave"} {...others} />);
}

export default Component;
