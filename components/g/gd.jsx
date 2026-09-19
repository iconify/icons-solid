import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cze11obha.css';
import '../../css/s/sxhqeuq2n.css';
import '../../css/c/c9rtkrbgw.css';
import '../../css/s/sbb7yx76k.css';
import '../../css/l/l20jugr9c.css';
import '../../css/q/q5ig67xee.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="cze11obha"/><path class="sxhqeuq2n"/><path class="c9rtkrbgw"/><circle class="sbb7yx76k"/><path class="l20jugr9c"/><path class="q5ig67xee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gd"} {...others} />);
}

export default Component;
