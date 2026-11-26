import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/h/he4fcgu5i.css';
import '../../css/d/dovvelb6i.css';
import '../../css/h/hngl2kkqf.css';
import '../../css/k/kgu-avbrd.css';
import '../../css/l/lp_yokb4d.css';
import '../../css/y/y4i6kac8y.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGIu5gLeZJ" cx="74" cy="62.8" r="148.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="he4fcgu5i"/><stop offset="1" class="he4fcgu5i"/></radialGradient></defs><path class="dovvelb6i"/><path fill="url(#SVGIu5gLeZJ)" transform="matrix(2.4 0 0 2.4 18.038 18.038)" class="hngl2kkqf"/><path class="kgu-avbrd"/><path class="lp_yokb4d"/><path class="y4i6kac8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:fish-cake-with-swirl"} {...others} />);
}

export default Component;
