import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kaafxwecp.css';
import '../../css/h/hqu8-q-5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="kaafxwecp"/><path class="hqu8-q-5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:margin-top"} {...others} />);
}

export default Component;
