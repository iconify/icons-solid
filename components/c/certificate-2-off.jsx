import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mf4d4cbem.css';
import '../../css/p/py_dg-b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mf4d4cbem"/><path class="py_dg-b2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:certificate-2-off"} {...others} />);
}

export default Component;
