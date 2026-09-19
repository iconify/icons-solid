import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqiiqibzu.css';
import '../../css/a/awwwo0b-c.css';
import '../../css/h/h8y2zelcv.css';
import '../../css/i/iy524nh3x.css';
import '../../css/e/eppa5msbm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sqiiqibzu"/><path class="awwwo0b-c"/><path class="h8y2zelcv"/><path class="iy524nh3x"/><path class="eppa5msbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:catside"} {...others} />);
}

export default Component;
