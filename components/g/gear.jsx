import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hwmy78bep.css';
import '../../css/g/gw-3o2bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="hwmy78bep"/><path class="gw-3o2bdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:gear"} {...others} />);
}

export default Component;
