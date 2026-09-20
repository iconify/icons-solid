import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/skq7rbv_x.css';
import '../../css/w/ws4guetfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="skq7rbv_x"/><path class="ws4guetfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alarm-snooze"} {...others} />);
}

export default Component;
