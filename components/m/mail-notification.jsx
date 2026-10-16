import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pck9ulgau.css';
import '../../css/k/k-3lz5n4k.css';
import '../../css/u/unr0kubyr.css';
import '../../css/s/s-lzncbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pck9ulgau"/><path class="k-3lz5n4k"/><path class="unr0kubyr"/><circle transform="rotate(90 19.4 5.3)" class="s-lzncbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-notification"} {...others} />);
}

export default Component;
