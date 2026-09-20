import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rusk8leef.css';
import '../../css/a/a5xf5pb3m.css';
import '../../css/r/rekiu1rxd.css';
import '../../css/v/v0yf5h_mp.css';
import '../../css/s/st77khbvg.css';
import '../../css/q/qj5yks32a.css';
import '../../css/x/x_76f06mb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><rect transform="rotate(-90 2 18.051)" class="rusk8leef"/><path class="a5xf5pb3m"/><path class="rekiu1rxd"/><path class="v0yf5h_mp"/><path class="st77khbvg"/><path class="qj5yks32a"/><path class="x_76f06mb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:toolbox-linear"} {...others} />);
}

export default Component;
