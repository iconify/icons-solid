import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i6ltabchy.css';
import '../../css/n/n1941ac-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i6ltabchy"/><path class="n1941ac-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-text-duotone"} {...others} />);
}

export default Component;
