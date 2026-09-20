import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d4ppg3peb.css';
import '../../css/q/qc-qo0m-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d4ppg3peb"/><path class="qc-qo0m-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:house-heart"} {...others} />);
}

export default Component;
