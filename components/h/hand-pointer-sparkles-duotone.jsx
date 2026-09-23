import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c6eyadc1h.css';
import '../../css/l/lxr-c948j.css';
import '../../css/t/t5_z6hmum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c6eyadc1h"/><path class="lxr-c948j"/><path class="t5_z6hmum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-pointer-sparkles-duotone"} {...others} />);
}

export default Component;
