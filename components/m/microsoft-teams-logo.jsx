import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u5pv4p5ws.css';
import '../../css/q/qs_l1pb7p.css';
import '../../css/i/itklqpqef.css';
import '../../css/l/lhc71cmzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="u5pv4p5ws"/><path class="qs_l1pb7p"/><path class="itklqpqef"/><path class="lhc71cmzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:microsoft-teams-logo"} {...others} />);
}

export default Component;
