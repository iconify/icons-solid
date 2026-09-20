import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xdpgh_biu.css';
import '../../css/y/y0jw3_b4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xdpgh_biu"/><path class="y0jw3_b4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cup-soda"} {...others} />);
}

export default Component;
