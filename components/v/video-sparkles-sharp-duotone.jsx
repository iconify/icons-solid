import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jdnpnfbih.css';
import '../../css/s/smhxg-b7v.css';
import '../../css/f/fmu2vzbby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="jdnpnfbih"/><path class="smhxg-b7v"/><path class="fmu2vzbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:video-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
