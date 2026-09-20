import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i-uw9nblo.css';
import '../../css/s/suoyxqbld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="i-uw9nblo"/><path class="suoyxqbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-vertical-space-around"} {...others} />);
}

export default Component;
