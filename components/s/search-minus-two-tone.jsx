import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k79gm2b1n.css';
import '../../css/r/r3wy7g-hk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k79gm2b1n"/><path class="r3wy7g-hk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-minus-two-tone"} {...others} />);
}

export default Component;
