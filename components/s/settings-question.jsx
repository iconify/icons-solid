import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p_-r1-b1k.css';
import '../../css/s/s_bzilb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p_-r1-b1k"/><path class="s_bzilb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-question"} {...others} />);
}

export default Component;
