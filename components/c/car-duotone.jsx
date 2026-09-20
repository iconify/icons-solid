import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lgmhi280s.css';
import '../../css/c/cpg4t9x5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lgmhi280s"/><path class="cpg4t9x5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:car-duotone"} {...others} />);
}

export default Component;
