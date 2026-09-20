import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl86f2bik.css';
import '../../css/y/yi6oqccfh.css';
import '../../css/i/iycln-b8i.css';
import '../../css/s/sdo41x55g.css';
import '../../css/q/qyfru4rrf.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGJs2WKAFT" x1="0" x2="512" y1="278" y2="790" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="dl86f2bik"/><stop offset="1" class="yi6oqccfh"/></linearGradient><circle fill="url(#SVGJs2WKAFT)" class="iycln-b8i"/><path class="sdo41x55g"/><path class="qyfru4rrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:poeticmetric"} {...others} />);
}

export default Component;
