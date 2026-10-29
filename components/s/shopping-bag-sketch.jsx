import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j44rrabxi.css';
import '../../css/k/kabwe8a7o.css';
import '../../css/r/rolrwhb8t.css';
import '../../css/s/saig0paye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j44rrabxi"/><path class="kabwe8a7o wm-a"/><path class="rolrwhb8t wm-k"/><path class="saig0paye wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-bag-sketch"} {...others} />);
}

export default Component;
