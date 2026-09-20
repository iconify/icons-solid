import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wl6_bbbdp.css';
import '../../css/b/byqxzk3de.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wl6_bbbdp"/><path class="byqxzk3de"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chalkboard-teacher"} {...others} />);
}

export default Component;
