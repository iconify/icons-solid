import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s2yr7sb8z.css';
import '../../css/z/znwhyskoy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s2yr7sb8z"/><path class="znwhyskoy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:matchstick"} {...others} />);
}

export default Component;
