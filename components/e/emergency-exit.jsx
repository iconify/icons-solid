import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q39dpkbbl.css';
import '../../css/a/apgpmbb5n.css';
import '../../css/s/s0esjybak.css';
import '../../css/s/ssj0hcght.css';
import '../../css/k/k--r8ptef.css';
import '../../css/w/wffdusbph.css';
import '../../css/b/bn382z_qe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q39dpkbbl"/><path clip-rule="evenodd" class="apgpmbb5n"/><path class="s0esjybak"/><path class="ssj0hcght"/><path class="k--r8ptef"/><path class="wffdusbph"/><path class="bn382z_qe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:emergency-exit"} {...others} />);
}

export default Component;
