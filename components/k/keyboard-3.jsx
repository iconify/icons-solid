import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xsygfyb_v.css';
import '../../css/g/gqknx84un.css';
import '../../css/h/hgd37_xuv.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="xsygfyb_v"/><path class="gqknx84un"/><path class="hgd37_xuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:keyboard-3"} {...others} />);
}

export default Component;
