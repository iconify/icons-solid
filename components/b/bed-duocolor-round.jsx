import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hk0u4yb2t.css';
import '../../css/r/rg0tbnbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hk0u4yb2t"/><path class="rg0tbnbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bed-duocolor-round"} {...others} />);
}

export default Component;
