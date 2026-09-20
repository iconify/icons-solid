import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xie2seq-y.css';
import '../../css/d/d8xwt1ukm.css';
import '../../css/a/aq3o-294l.css';
import '../../css/a/ayjk_vbcj.css';

const viewBox = {"width":150,"height":150};
const content = `<g class="ft5dv1b6b"><path class="xie2seq-y"/><path clip-rule="evenodd" class="d8xwt1ukm"/><path class="aq3o-294l"/><path class="ayjk_vbcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:canonical-microcloud"} {...others} />);
}

export default Component;
