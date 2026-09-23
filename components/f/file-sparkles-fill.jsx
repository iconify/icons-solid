import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ha_-kxwol.css';
import '../../css/d/d0dmm8bpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ha_-kxwol"/><path class="d0dmm8bpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-sparkles-fill"} {...others} />);
}

export default Component;
