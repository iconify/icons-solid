import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ym9ihsbta.css';
import '../../css/v/v59288b0k.css';
import '../../css/p/pjlpop4pn.css';
import '../../css/k/k1ou4_b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ym9ihsbta"/><path class="v59288b0k"/><path class="pjlpop4pn"/><path class="k1ou4_b5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pinpoint-01"} {...others} />);
}

export default Component;
