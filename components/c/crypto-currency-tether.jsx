import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw3zz_buu.css';
import '../../css/i/i1bv2gcvj.css';
import '../../css/v/vvq9rh13x.css';
import '../../css/l/lem2pfw8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jw3zz_buu"/><path class="i1bv2gcvj"/><path class="vvq9rh13x"/><path class="lem2pfw8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:crypto-currency-tether"} {...others} />);
}

export default Component;
