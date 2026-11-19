import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igsnfnxrq.css';
import '../../css/n/ne0a_2zjh.css';
import '../../css/k/kpojoje_h.css';
import '../../css/b/b9dkl4b5r.css';
import '../../css/w/wl36d7fyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="igsnfnxrq"/><path class="ne0a_2zjh"/><path class="kpojoje_h"/><path class="b9dkl4b5r"/><path class="wl36d7fyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:printer-signal"} {...others} />);
}

export default Component;
