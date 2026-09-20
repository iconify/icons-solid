import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mh944k06k.css';
import '../../css/i/i8el53brn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mh944k06k"/><path class="i8el53brn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-up"} {...others} />);
}

export default Component;
