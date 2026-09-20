import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts8chuoof.css';
import '../../css/h/hqufffsil.css';
import '../../css/v/ves5g3ble.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ts8chuoof"/><path class="hqufffsil"/><path class="ves5g3ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:karrot"} {...others} />);
}

export default Component;
