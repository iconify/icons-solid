import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hxw6_b0rh.css';
import '../../css/k/kco3tdlia.css';
import '../../css/s/sr5x3vbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hxw6_b0rh"/><path class="kco3tdlia"/><path class="sr5x3vbyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:repeat-1"} {...others} />);
}

export default Component;
