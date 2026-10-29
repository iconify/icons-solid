import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1dcdbblm.css';
import '../../css/i/ipkd9vbgw.css';
import '../../css/h/hchqqbcqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="d1dcdbblm"/><path class="ipkd9vbgw"/><path class="hchqqbcqj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-snowflake-duo"} {...others} />);
}

export default Component;
