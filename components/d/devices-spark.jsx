import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q9s_e6opx.css';
import '../../css/c/cujz86rwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q9s_e6opx"/><path class="cujz86rwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-spark"} {...others} />);
}

export default Component;
