import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/lpql2gbja.css';
import '../../css/u/uz4p9kdug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtctjNbeg" x1="3.5" x2="20.49" y1="4.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGtctjNbeg)" class="lpql2gbja wm-k"/><path class="uz4p9kdug wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:barcode"} {...others} />);
}

export default Component;
