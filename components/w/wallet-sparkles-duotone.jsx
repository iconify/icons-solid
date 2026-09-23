import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eootuelhi.css';
import '../../css/a/ai5f1achb.css';
import '../../css/c/c2gj4d9vs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eootuelhi"/><path class="ai5f1achb"/><path class="c2gj4d9vs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wallet-sparkles-duotone"} {...others} />);
}

export default Component;
