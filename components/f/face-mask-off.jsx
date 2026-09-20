import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cttnow96e.css';
import '../../css/l/ldf5ysizt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cttnow96e"/><path class="ldf5ysizt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:face-mask-off"} {...others} />);
}

export default Component;
