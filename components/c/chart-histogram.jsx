import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vae9wug9c.css';
import '../../css/n/n6i76ubbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vae9wug9c"/><path class="n6i76ubbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-histogram"} {...others} />);
}

export default Component;
