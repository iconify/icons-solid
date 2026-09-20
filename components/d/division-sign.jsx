import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqqwh7w1i.css';
import '../../css/z/zg9vbp76i.css';
import '../../css/m/m87cjre2p.css';
import '../../css/m/mc5erxb5b.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/j/jl290tb9n.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="sqqwh7w1i"><path class="zg9vbp76i"/><circle class="m87cjre2p"/><circle class="mc5erxb5b"/></g><g class="ij2x_72vy"><path class="jl290tb9n"/><circle class="m87cjre2p"/><circle class="mc5erxb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:division-sign"} {...others} />);
}

export default Component;
