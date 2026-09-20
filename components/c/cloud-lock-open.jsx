import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jynkrrlym.css';
import '../../css/k/kv12a1rzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jynkrrlym"/><path class="kv12a1rzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cloud-lock-open"} {...others} />);
}

export default Component;
