import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bnhh1-31n.css';
import '../../css/d/d34ut4blf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bnhh1-31n"/><path class="d34ut4blf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:parasol-duotone"} {...others} />);
}

export default Component;
