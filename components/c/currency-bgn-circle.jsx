import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iamp19bwc.css';
import '../../css/e/ewe-g2bjz.css';
import '../../css/l/le6pvxb8x.css';
import '../../css/f/fip3d_ata.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="iamp19bwc"/><path class="ewe-g2bjz"/><path class="le6pvxb8x"/><path class="fip3d_ata"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-bgn-circle"} {...others} />);
}

export default Component;
