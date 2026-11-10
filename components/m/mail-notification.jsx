import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4d0znhae.css';
import '../../css/w/wn1hx63gd.css';
import '../../css/u/unr0kubyr.css';
import '../../css/s/s-lzncbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m4d0znhae"/><path class="wn1hx63gd"/><path class="unr0kubyr"/><circle class="s-lzncbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-notification"} {...others} />);
}

export default Component;
