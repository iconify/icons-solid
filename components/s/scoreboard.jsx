import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yv_7q-nnn.css';
import '../../css/o/oyc_5pbzb.css';
import '../../css/o/ownynnb6c.css';
import '../../css/h/hnxhm6k0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yv_7q-nnn"/><path class="oyc_5pbzb"/><path class="ownynnb6c"/><path class="hnxhm6k0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:scoreboard"} {...others} />);
}

export default Component;
