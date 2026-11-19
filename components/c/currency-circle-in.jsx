import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m5x-zobik.css';
import '../../css/t/t1z-7sbei.css';
import '../../css/u/u092k0a8v.css';
import '../../css/r/rowlspbge.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path clip-rule="evenodd" class="m5x-zobik"/><path class="t1z-7sbei"/><path class="u092k0a8v"/><path class="rowlspbge"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-circle-in"} {...others} />);
}

export default Component;
