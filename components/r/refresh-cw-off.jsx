import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l89pn8bop.css';
import '../../css/r/r85id8b3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l89pn8bop"/><path class="r85id8b3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:refresh-cw-off"} {...others} />);
}

export default Component;
