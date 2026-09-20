import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y_dgkwzkl.css';
import '../../css/m/m9dh46bbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y_dgkwzkl"/><path class="m9dh46bbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pepper"} {...others} />);
}

export default Component;
