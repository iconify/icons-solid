import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tdz9v5bjp.css';
import '../../css/p/psr97mb_s.css';
import '../../css/p/pcg7sbb1l.css';
import '../../css/w/wlb0b7siw.css';
import '../../css/g/g8n191bla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tdz9v5bjp"/><path class="psr97mb_s wm-shine"/><path class="pcg7sbb1l wm-k"/><path class="wlb0b7siw wm-a"/><path class="g8n191bla wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:crayon"} {...others} />);
}

export default Component;
