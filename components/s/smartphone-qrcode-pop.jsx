import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/u/ua2d-bdfl.css';
import '../../css/j/jn4omiblp.css';
import '../../css/n/nsk_fac4d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="ua2d-bdfl"/><path class="jn4omiblp"/><path class="nsk_fac4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:smartphone-qrcode-pop"} {...others} />);
}

export default Component;
