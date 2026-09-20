import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g70whwsdk.css';
import '../../css/k/kgkgp47br.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g70whwsdk"/><path class="kgkgp47br"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:badge-plus-duotone"} {...others} />);
}

export default Component;
