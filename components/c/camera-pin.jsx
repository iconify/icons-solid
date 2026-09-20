import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-2a1ob9b.css';
import '../../css/u/ufjt8parv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y-2a1ob9b"/><path class="ufjt8parv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-pin"} {...others} />);
}

export default Component;
