import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vnjbsdbbz.css';
import '../../css/v/v0sja2b4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vnjbsdbbz"/><path class="v0sja2b4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:robot-face"} {...others} />);
}

export default Component;
