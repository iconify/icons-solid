import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmyt3mn_k.css';
import '../../css/a/ah9csqb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mmyt3mn_k"/><path class="ah9csqb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:heart-broken"} {...others} />);
}

export default Component;
