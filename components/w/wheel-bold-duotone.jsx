import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gz4d3ib8q.css';
import '../../css/w/wz7okyt-c.css';
import '../../css/k/keyva0bqo.css';
import '../../css/x/x0n_xkdnz.css';
import '../../css/l/lcjccb0-c.css';
import '../../css/g/g2sb6lb3p.css';
import '../../css/n/n1tm14bfl.css';
import '../../css/f/f66yn3b1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="gz4d3ib8q"/><path clip-rule="evenodd" class="wz7okyt-c"/></g><path class="keyva0bqo"/><path class="x0n_xkdnz"/><path class="lcjccb0-c"/><path class="g2sb6lb3p"/><path class="n1tm14bfl"/><path class="f66yn3b1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wheel-bold-duotone"} {...others} />);
}

export default Component;
