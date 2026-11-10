import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sk-2mf5up.css';
import '../../css/m/mzd9wts3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sk-2mf5up"/><path class="mzd9wts3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-key"} {...others} />);
}

export default Component;
