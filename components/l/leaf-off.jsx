import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t-9qrsbdi.css';
import '../../css/c/c7avudl9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t-9qrsbdi"/><path class="c7avudl9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:leaf-off"} {...others} />);
}

export default Component;
