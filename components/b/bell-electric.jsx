import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-_xh86hz.css';
import '../../css/k/k9l3u8def.css';
import '../../css/j/jxp6n47kl.css';
import '../../css/g/gtgg1ubym.css';
import '../../css/a/a2eipyb8e.css';
import '../../css/w/wm4ctnwru.css';
import '../../css/q/q_055nb0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="v-_xh86hz"/><rect class="k9l3u8def"/><circle class="jxp6n47kl"/><rect class="gtgg1ubym"/><path class="a2eipyb8e"/><path class="wm4ctnwru"/><circle class="q_055nb0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bell-electric"} {...others} />);
}

export default Component;
