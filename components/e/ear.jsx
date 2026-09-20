import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e14kgybxc.css';
import '../../css/y/y_gubef4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e14kgybxc"/><path class="y_gubef4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ear"} {...others} />);
}

export default Component;
