import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nli5obcdr.css';
import '../../css/f/fv5pcnpmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nli5obcdr"/><path class="fv5pcnpmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:orbit-vertical"} {...others} />);
}

export default Component;
