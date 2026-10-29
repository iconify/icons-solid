import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/p7fqgsbho.css';
import '../../css/o/oyna0ry5w.css';
import '../../css/x/x1oaj1zkc.css';
import '../../css/w/wlaw0i8ar.css';
import '../../css/d/dn9b4gfix.css';
import '../../css/k/k6b_oob_p.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="p7fqgsbho wm-shadow"/><path class="oyna0ry5w"/><path class="x1oaj1zkc"/><path class="wlaw0i8ar"/><path class="dn9b4gfix wm-shine"/><path class="k6b_oob_p wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:at-sign"} {...others} />);
}

export default Component;
