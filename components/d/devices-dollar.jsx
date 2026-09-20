import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5jblw1zm.css';
import '../../css/j/jcs_7f-ea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t5jblw1zm"/><path class="jcs_7f-ea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-dollar"} {...others} />);
}

export default Component;
