import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wqx_i9b-e.css';
import '../../css/p/pwnwd6bwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wqx_i9b-e"/><path class="pwnwd6bwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:smartphone-two-tone"} {...others} />);
}

export default Component;
