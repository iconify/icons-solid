import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/luahm7wri.css';
import '../../css/e/e-6my1bne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="luahm7wri"/><path class="e-6my1bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-donut"} {...others} />);
}

export default Component;
