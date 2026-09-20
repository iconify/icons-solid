import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/irfhm6stt.css';
import '../../css/a/a0dqx_b8q.css';
import '../../css/c/chmu8x-6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="irfhm6stt"/><path class="a0dqx_b8q"/><path class="chmu8x-6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:carrot-off"} {...others} />);
}

export default Component;
