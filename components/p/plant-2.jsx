import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j1j30obyh.css';
import '../../css/s/sw7yiokxl.css';
import '../../css/j/j7plc1b6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j1j30obyh"/><path class="sw7yiokxl"/><path class="j7plc1b6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:plant-2"} {...others} />);
}

export default Component;
