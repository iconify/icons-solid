import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia5b6gb-y.css';
import '../../css/c/c_c90_bce.css';
import '../../css/g/glzx3xbim.css';
import '../../css/n/nvoe05bmd.css';
import '../../css/x/xweqt1mrp.css';
import '../../css/a/aom-vwbtc.css';
import '../../css/h/h8ejzmbrg.css';
import '../../css/h/h13bfn9vx.css';
import '../../css/l/l4xmri_8b.css';
import '../../css/k/ki_vk7b0f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ia5b6gb-y"/><path class="c_c90_bce"/><path class="glzx3xbim"/><path class="nvoe05bmd"/><path class="xweqt1mrp"/><path class="aom-vwbtc"/><path class="h8ejzmbrg"/><path class="h13bfn9vx"/><path class="l4xmri_8b"/><path class="ki_vk7b0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:postgis-wordmark"} {...others} />);
}

export default Component;
