import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lhr3fmb-r.css';
import '../../css/e/eio33vvze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lhr3fmb-r"/><path class="eio33vvze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:microphone-off"} {...others} />);
}

export default Component;
