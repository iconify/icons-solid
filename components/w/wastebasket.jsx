import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtfcmbcna.css';
import '../../css/r/rfp-f_hib.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gtfcmbcna"/><path class="rfp-f_hib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:wastebasket"} {...others} />);
}

export default Component;
