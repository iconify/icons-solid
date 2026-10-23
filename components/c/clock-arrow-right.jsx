import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m9424_g_h.css';
import '../../css/u/uqwhvmb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m9424_g_h"/><path class="uqwhvmb5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:clock-arrow-right"} {...others} />);
}

export default Component;
