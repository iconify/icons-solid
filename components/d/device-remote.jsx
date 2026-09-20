import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fc1zhqbtz.css';
import '../../css/t/t12ob36hi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fc1zhqbtz"/><path class="t12ob36hi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-remote"} {...others} />);
}

export default Component;
