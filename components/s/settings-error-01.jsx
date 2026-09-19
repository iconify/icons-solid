import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m8am-9box.css';
import '../../css/h/hav_9b5ms.css';
import '../../css/m/mrlb7pzin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m8am-9box"/><path class="hav_9b5ms"/><path class="mrlb7pzin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:settings-error-01"} {...others} />);
}

export default Component;
