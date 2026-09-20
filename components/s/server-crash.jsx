import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r1yq7db4h.css';
import '../../css/u/ux4jel9qf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r1yq7db4h"/><path class="ux4jel9qf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:server-crash"} {...others} />);
}

export default Component;
