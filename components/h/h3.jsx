import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m5ygchbhs.css';
import '../../css/l/lbb_mrgoh.css';
import '../../css/k/keahgvigr.css';
import '../../css/i/i0g253bay.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="m5ygchbhs"/><path class="lbb_mrgoh"/><path class="keahgvigr"/><path class="i0g253bay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:h3"} {...others} />);
}

export default Component;
