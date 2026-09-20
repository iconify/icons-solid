import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m7vfb5bfa.css';
import '../../css/p/pp06ooulm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m7vfb5bfa"/><path class="pp06ooulm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:transfer-in"} {...others} />);
}

export default Component;
