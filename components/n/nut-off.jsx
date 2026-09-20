import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hkypsfb6i.css';
import '../../css/y/ynigo1bzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hkypsfb6i"/><path class="ynigo1bzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:nut-off"} {...others} />);
}

export default Component;
