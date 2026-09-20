import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lc_5-wblb.css';
import '../../css/v/vvq9rh13x.css';
import '../../css/l/lem2pfw8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lc_5-wblb"/><path class="vvq9rh13x"/><path class="lem2pfw8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:crypto-currency-litecoin"} {...others} />);
}

export default Component;
