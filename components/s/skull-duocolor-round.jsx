import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sdsm8gb8e.css';
import '../../css/s/s5_e1qyfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sdsm8gb8e"/><path class="s5_e1qyfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skull-duocolor-round"} {...others} />);
}

export default Component;
