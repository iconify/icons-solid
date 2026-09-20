import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w8rd1c17g.css';
import '../../css/v/vlucz_8vk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w8rd1c17g"/><path class="vlucz_8vk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:load-balancer"} {...others} />);
}

export default Component;
