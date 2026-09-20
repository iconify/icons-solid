import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a3g0lob5j.css';
import '../../css/e/en-suobee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a3g0lob5j"/><path class="en-suobee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rosette-discount-off"} {...others} />);
}

export default Component;
