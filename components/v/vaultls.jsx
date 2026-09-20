import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvaxlffsd.css';
import '../../css/s/seh_bsbyt.css';
import '../../css/k/kutl9dbta.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGkHdkyikJ" x1="48.154" x2="115.519" y1="575.296" y2="408.562" gradientTransform="matrix(2.8479 0 0 -2.8498 18.771 1647.394)" gradientUnits="userSpaceOnUse"><stop offset=".01" class="bvaxlffsd"/><stop offset="1" class="seh_bsbyt"/></linearGradient><path fill="url(#SVGkHdkyikJ)" class="kutl9dbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vaultls"} {...others} />);
}

export default Component;
