import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mbbhoq-at.css';
import '../../css/e/e0a3vrbaw.css';
import '../../css/w/wwlijhbfb.css';
import '../../css/o/o67bosbsu.css';
import '../../css/k/kvpll4b7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mbbhoq-at"/><path class="e0a3vrbaw"/><path class="wwlijhbfb"/><path class="o67bosbsu"/><path class="kvpll4b7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:repeat-once-duo"} {...others} />);
}

export default Component;
