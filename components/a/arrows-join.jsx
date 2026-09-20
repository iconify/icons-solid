import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9en77b0p.css';
import '../../css/v/vwdfj7brr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g9en77b0p"/><path class="vwdfj7brr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-join"} {...others} />);
}

export default Component;
