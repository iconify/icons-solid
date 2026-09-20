import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/opk43_ukr.css';
import '../../css/z/z8b6ep4dx.css';
import '../../css/q/qrqz59bvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="opk43_ukr"/><path class="z8b6ep4dx"/><path class="qrqz59bvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-check-broken"} {...others} />);
}

export default Component;
