import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hu3i77b9l.css';
import '../../css/n/nej5yhe4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hu3i77b9l"/><path class="nej5yhe4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-down"} {...others} />);
}

export default Component;
