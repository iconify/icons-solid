import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ic0jf5bor.css';
import '../../css/u/uq73d1qjn.css';
import '../../css/s/swzt5ac_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ic0jf5bor wm-k"/><path class="uq73d1qjn wm-k"/><path class="swzt5ac_x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:car-sketch"} {...others} />);
}

export default Component;
