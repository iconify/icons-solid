import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s6dq_8bij.css';
import '../../css/q/qko5qirpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s6dq_8bij"/><path class="qko5qirpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:face-slightly-smiling-plus"} {...others} />);
}

export default Component;
