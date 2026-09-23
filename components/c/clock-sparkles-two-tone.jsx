import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xy54sia-t.css';
import '../../css/l/lxr-c948j.css';
import '../../css/s/s1gq2diuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xy54sia-t"/><path class="lxr-c948j"/><path class="s1gq2diuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-sparkles-two-tone"} {...others} />);
}

export default Component;
