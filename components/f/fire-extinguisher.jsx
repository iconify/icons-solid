import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cranq_oum.css';
import '../../css/l/lep5txbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cranq_oum"/><path class="lep5txbfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:fire-extinguisher"} {...others} />);
}

export default Component;
