import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pj68rbber.css';
import '../../css/p/pz6bhwbna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="pj68rbber"/><path class="pz6bhwbna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:gift-light"} {...others} />);
}

export default Component;
