import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xtf23m7og.css';
import '../../css/n/n4nddbcfo.css';
import '../../css/v/vrh1azbxe.css';
import '../../css/d/dkk21mj1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xtf23m7og"/><path class="n4nddbcfo"/><path class="vrh1azbxe"/><path class="dkk21mj1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-vibration-broken"} {...others} />);
}

export default Component;
