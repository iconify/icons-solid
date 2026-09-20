import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rzy_z4b1c.css';
import '../../css/o/ozl4dybfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rzy_z4b1c"/><path class="ozl4dybfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:globe-duotone"} {...others} />);
}

export default Component;
