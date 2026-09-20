import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nevdhvban.css';
import '../../css/u/uf2jbbjuc.css';
import '../../css/d/dbdsqp72f.css';
import '../../css/u/uesc6mmwn.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGPmN2DdrF" x1="256" x2="256" y1="514" y2="2" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="nevdhvban"/><stop offset="1" class="uf2jbbjuc"/></linearGradient><path fill="url(#SVGPmN2DdrF)" class="dbdsqp72f"/><path class="uesc6mmwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sveltia-cms"} {...others} />);
}

export default Component;
