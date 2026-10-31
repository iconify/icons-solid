import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q1qzyoe_f.css';
import '../../css/o/oc7ra1pma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q1qzyoe_f"/><path class="oc7ra1pma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:link-horizontal-duocolor-round"} {...others} />);
}

export default Component;
