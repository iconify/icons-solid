import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ov0i7wbhw.css';
import '../../css/u/u5z2xlx6s.css';
import '../../css/p/putecyz5x.css';
import '../../css/p/p4pn9mm9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ov0i7wbhw"/><path class="u5z2xlx6s"/><path class="putecyz5x"/><path class="p4pn9mm9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-btc-circle"} {...others} />);
}

export default Component;
