import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/quhf9pj8o.css';
import '../../css/v/vp-ly0bxv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="quhf9pj8o"/><path class="vp-ly0bxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shovel-duocolor-round"} {...others} />);
}

export default Component;
