import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nl9_-acrh.css';
import '../../css/j/j2hvpnbcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nl9_-acrh"/><path class="j2hvpnbcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:globe-ban"} {...others} />);
}

export default Component;
