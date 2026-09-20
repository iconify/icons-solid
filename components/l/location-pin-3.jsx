import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/ps7fr_b_k.css';
import '../../css/z/z46clkizm.css';
import '../../css/i/iisfl9b6t.css';
import '../../css/e/exai6-brc.css';
import '../../css/x/xun869bwb.css';
import '../../css/f/fk4l-8bwf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ps7fr_b_k"/><path class="z46clkizm"/><path class="iisfl9b6t"/><path class="exai6-brc"/><path class="xun869bwb"/><path class="fk4l-8bwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:location-pin-3"} {...others} />);
}

export default Component;
