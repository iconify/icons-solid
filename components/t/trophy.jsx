import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubgljw8ou.css';
import '../../css/e/etxjo6flc.css';
import '../../css/m/m5_73rb4d.css';
import '../../css/c/cukivjsit.css';
import '../../css/k/kk4uo0bqy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ubgljw8ou"/><path class="etxjo6flc"/><path class="m5_73rb4d"/><ellipse class="cukivjsit"/><path class="kk4uo0bqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:trophy"} {...others} />);
}

export default Component;
