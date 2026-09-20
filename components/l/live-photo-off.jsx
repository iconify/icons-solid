import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v_ns_2etk.css';
import '../../css/j/j9l20jbem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v_ns_2etk"/><path class="j9l20jbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:live-photo-off"} {...others} />);
}

export default Component;
