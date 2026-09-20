import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fv5pcnpmp.css';
import '../../css/y/y5czi83_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fv5pcnpmp"/><path class="y5czi83_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:biohazard"} {...others} />);
}

export default Component;
