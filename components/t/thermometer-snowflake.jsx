import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xdsar156a.css';
import '../../css/h/hrpif6bxm.css';
import '../../css/b/bfkp2srhy.css';
import '../../css/i/ipkd9vbgw.css';
import '../../css/k/kyljqdbig.css';
import '../../css/s/sygn0p_nc.css';
import '../../css/l/lvu1uudjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="xdsar156a"/><path class="hrpif6bxm"/><path class="bfkp2srhy wm-shine"/><path class="ipkd9vbgw wm-k"/><path class="kyljqdbig wm-a"/><path class="sygn0p_nc"/><path class="lvu1uudjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:thermometer-snowflake"} {...others} />);
}

export default Component;
