import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pxw805b6o.css';
import '../../css/r/rmtmvo4iq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pxw805b6o"/><path class="rmtmvo4iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:augmented-reality"} {...others} />);
}

export default Component;
