import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f7_kfcbwf.css';
import '../../css/t/tp66aodkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f7_kfcbwf"/><path class="tp66aodkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:adventure-car-truck-1"} {...others} />);
}

export default Component;
