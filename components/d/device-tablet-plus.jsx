import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gzukmvb0j.css';
import '../../css/k/kp93kgxdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gzukmvb0j"/><path class="kp93kgxdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-plus"} {...others} />);
}

export default Component;
