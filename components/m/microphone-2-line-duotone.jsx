import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/l/lzycjh8tw.css';
import '../../css/h/hk--7ruxp.css';
import '../../css/z/z-o_wrbiv.css';
import '../../css/y/yzl8izb_o.css';
import '../../css/n/nh-kspbph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="lzycjh8tw"/><path class="hk--7ruxp"/><path class="z-o_wrbiv"/><path class="yzl8izb_o"/><path class="nh-kspbph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-2-line-duotone"} {...others} />);
}

export default Component;
