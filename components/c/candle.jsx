import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/spq_11b1q.css';
import '../../css/l/l602x0xcs.css';
import '../../css/s/swo5wpbib.css';
import '../../css/i/ii_bipr0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="spq_11b1q"/><path class="l602x0xcs"/><path class="swo5wpbib"/><path class="ii_bipr0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:candle"} {...others} />);
}

export default Component;
