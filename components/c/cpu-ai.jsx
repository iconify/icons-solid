import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x6it0dbxl.css';
import '../../css/a/ares4u2vu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x6it0dbxl"/><rect class="ares4u2vu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cpu-ai"} {...others} />);
}

export default Component;
