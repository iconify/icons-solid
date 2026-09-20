import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7wq2nbvt.css';
import '../../css/l/l0r6-odaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h7wq2nbvt"/><path class="l0r6-odaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:globe"} {...others} />);
}

export default Component;
