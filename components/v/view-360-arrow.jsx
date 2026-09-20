import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p3ddb6bae.css';
import '../../css/r/ri2jkqbfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p3ddb6bae"/><path class="ri2jkqbfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:view-360-arrow"} {...others} />);
}

export default Component;
