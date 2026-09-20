import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kibqgsb0e.css';
import '../../css/s/swuddpb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kibqgsb0e"/><path class="swuddpb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:volume-off-fill"} {...others} />);
}

export default Component;
