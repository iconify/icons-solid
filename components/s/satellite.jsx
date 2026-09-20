import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mjfb4eb3x.css';
import '../../css/c/citltsbex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mjfb4eb3x"/><path class="citltsbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:satellite"} {...others} />);
}

export default Component;
