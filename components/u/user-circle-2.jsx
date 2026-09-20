import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/sj_zfbclt.css';
import '../../css/v/vl7c_o-va.css';
import '../../css/w/wky5h3byu.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="sj_zfbclt"/><path class="vl7c_o-va"/><path class="wky5h3byu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:user-circle-2"} {...others} />);
}

export default Component;
