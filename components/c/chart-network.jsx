import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n41vm6i6x.css';
import '../../css/q/qtvjirbxw.css';
import '../../css/q/qnm2j-b2x.css';
import '../../css/z/z7116s0zx.css';
import '../../css/x/xmr3-9bal.css';
import '../../css/q/qtfadw3vl.css';
import '../../css/b/b-k7koqnb.css';
import '../../css/n/nal28vbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n41vm6i6x"/><circle transform="rotate(90 9.15 6.45)" class="qtvjirbxw"/><circle transform="rotate(90 10.19 15.58)" class="qnm2j-b2x"/><circle transform="rotate(90 18.5 11.42)" class="z7116s0zx"/><circle transform="rotate(90 9.15 6.45)" class="xmr3-9bal"/><circle transform="rotate(90 10.19 15.58)" class="qtfadw3vl"/><circle transform="rotate(90 18.5 11.42)" class="b-k7koqnb"/><path class="nal28vbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-network"} {...others} />);
}

export default Component;
