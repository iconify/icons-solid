import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mez3bnxzu.css';
import '../../css/r/r577nlb-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mez3bnxzu"/><path class="r577nlb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:barrel"} {...others} />);
}

export default Component;
