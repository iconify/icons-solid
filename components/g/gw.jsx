import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rikp2ln1f.css';
import '../../css/m/mwasifbqi.css';
import '../../css/o/op4_3ybqn.css';
import '../../css/e/ehsb1bbur.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rikp2ln1f"/><path class="mwasifbqi"/><path class="op4_3ybqn"/><path class="ehsb1bbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:gw"} {...others} />);
}

export default Component;
