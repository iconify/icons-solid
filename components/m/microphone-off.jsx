import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/s/sxz7n_bfg.css';
import '../../css/f/fw_9m8bgf.css';
import '../../css/b/bq2upackq.css';
import '../../css/c/c0q88ibhp.css';
import '../../css/h/hdtfr9hjk.css';
import '../../css/m/m_y9uobpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><path class="sxz7n_bfg wm-shadow"/><path class="fw_9m8bgf wm-shadow"/><path class="bq2upackq wm-k"/><path class="c0q88ibhp wm-k"/><path class="hdtfr9hjk wm-s"/><path class="m_y9uobpv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:microphone-off"} {...others} />);
}

export default Component;
