import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygproqguv.css';
import '../../css/k/kwxs_tsmp.css';
import '../../css/s/sejoy148s.css';
import '../../css/j/jegxkcbks.css';
import '../../css/h/he_pju8rj.css';
import '../../css/p/plb-anq3s.css';

const viewBox = {"width":364.26,"height":356.51,"left":-1.76,"top":0.49};
const content = `<path class="ygproqguv"/><path class="kwxs_tsmp"/><path class="sejoy148s"/><path class="jegxkcbks"/><path class="he_pju8rj"/><path class="plb-anq3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kubeedge-light"} {...others} />);
}

export default Component;
