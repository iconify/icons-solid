import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r17iggbmi.css';
import '../../css/i/imo26mlcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r17iggbmi"/><path class="imo26mlcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-heart"} {...others} />);
}

export default Component;
