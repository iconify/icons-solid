import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n-me-oute.css';
import '../../css/k/kmm7tnz0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n-me-oute"/><path class="kmm7tnz0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-cancel"} {...others} />);
}

export default Component;
