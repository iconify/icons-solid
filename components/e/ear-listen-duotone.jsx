import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k81s51n4k.css';
import '../../css/s/sicpuzlba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k81s51n4k"/><path class="sicpuzlba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ear-listen-duotone"} {...others} />);
}

export default Component;
