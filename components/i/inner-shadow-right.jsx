import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cc_4uhv4l.css';
import '../../css/q/q0jt-hbdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cc_4uhv4l"/><path class="q0jt-hbdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:inner-shadow-right"} {...others} />);
}

export default Component;
