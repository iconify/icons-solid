import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rfnp7jbpi.css';
import '../../css/p/pmsjm7ivf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rfnp7jbpi"/><path class="pmsjm7ivf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:map-pin-heart-duocolor-round"} {...others} />);
}

export default Component;
