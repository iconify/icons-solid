import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y9yf7qbhl.css';
import '../../css/q/qk8b9ebfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y9yf7qbhl"/><path class="qk8b9ebfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:volume-low-fill"} {...others} />);
}

export default Component;
