import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cx89x0llr.css';
import '../../css/s/sb8ezhbjv.css';
import '../../css/d/dqjvr6s7b.css';
import '../../css/x/x5ghs4b5t.css';
import '../../css/o/omscwb-gq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cx89x0llr"/><path class="sb8ezhbjv wm-shine"/><path class="dqjvr6s7b wm-k"/><path class="wm-a x5ghs4b5t"/><path class="omscwb-gq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:package-open"} {...others} />);
}

export default Component;
