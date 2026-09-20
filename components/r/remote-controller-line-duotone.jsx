import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oypn1ubbc.css';
import '../../css/i/iqy4f3ajf.css';
import '../../css/s/s3rslbcfp.css';
import '../../css/z/zwiw2-bkv.css';
import '../../css/g/g3w7qrfpr.css';
import '../../css/c/ca53wpbej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oypn1ubbc"/><path class="iqy4f3ajf"/><path class="s3rslbcfp"/><path class="zwiw2-bkv"/><path class="g3w7qrfpr"/><path class="ca53wpbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-line-duotone"} {...others} />);
}

export default Component;
