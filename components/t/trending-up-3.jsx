import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kkms99bwe.css';
import '../../css/v/vfr3d_s5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kkms99bwe"/><path class="vfr3d_s5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:trending-up-3"} {...others} />);
}

export default Component;
