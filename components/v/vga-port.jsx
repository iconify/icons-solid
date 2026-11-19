import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh0fdxcre.css';
import '../../css/f/fn2hy8bgw.css';
import '../../css/s/s2ma_eydx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wh0fdxcre"/><path class="fn2hy8bgw"/><path class="s2ma_eydx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:vga-port"} {...others} />);
}

export default Component;
