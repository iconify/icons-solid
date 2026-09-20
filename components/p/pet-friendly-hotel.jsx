import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/nk3dl4uds.css';
import '../../css/v/vwchbrbih.css';
import '../../css/r/rye60qbvw.css';
import '../../css/t/ttx1kqvop.css';
import '../../css/s/se8-25b9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="nk3dl4uds"/><path class="vwchbrbih"/><path class="rye60qbvw"/><path class="ttx1kqvop"/><path class="se8-25b9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pet-friendly-hotel"} {...others} />);
}

export default Component;
