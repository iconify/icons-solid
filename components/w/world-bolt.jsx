import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bpzzsfb7k.css';
import '../../css/r/ro3ucszwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bpzzsfb7k"/><path class="ro3ucszwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-bolt"} {...others} />);
}

export default Component;
