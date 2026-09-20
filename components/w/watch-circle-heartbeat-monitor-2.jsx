import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/std65lrxr.css';
import '../../css/r/rq8bxjnsx.css';
import '../../css/e/e533k2olw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="std65lrxr"/><path class="rq8bxjnsx"/><path class="e533k2olw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:watch-circle-heartbeat-monitor-2"} {...others} />);
}

export default Component;
