import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lbaf_lbyk.css';
import '../../css/f/feps4ibua.css';
import '../../css/h/hu2c04_lo.css';
import '../../css/i/izb9cccdy.css';
import '../../css/k/klj2venwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lbaf_lbyk"/><path class="feps4ibua"/><path class="hu2c04_lo wm-shine"/><path class="izb9cccdy wm-k"/><path class="klj2venwb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:weight"} {...others} />);
}

export default Component;
