import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/icva-acmt.css';
import '../../css/r/rq4e84erx.css';
import '../../css/y/ytde_dbbu.css';
import '../../css/v/v0x6_kb5l.css';
import '../../css/h/hce54acyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="icva-acmt wm-shadow"/><path class="rq4e84erx wm-shadow"/><path class="ytde_dbbu"/><path class="v0x6_kb5l"/><path class="hce54acyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cake"} {...others} />);
}

export default Component;
