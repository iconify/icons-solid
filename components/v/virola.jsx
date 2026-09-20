import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9cgh1bbi.css';
import '../../css/t/t60lurbfo.css';
import '../../css/b/bf1qhe5gb.css';
import '../../css/k/k_8ovrwuv.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGsEX3keJy" x1="74.981" x2="437.019" y1="439.019" y2="76.981" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="y9cgh1bbi"/><stop offset="1" class="t60lurbfo"/></linearGradient><path fill="url(#SVGsEX3keJy)" class="bf1qhe5gb"/><path class="k_8ovrwuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:virola"} {...others} />);
}

export default Component;
