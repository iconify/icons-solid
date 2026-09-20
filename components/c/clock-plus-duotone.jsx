import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p2yirbl_t.css';
import '../../css/u/u_cx-ss4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p2yirbl_t"/><path class="u_cx-ss4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-plus-duotone"} {...others} />);
}

export default Component;
