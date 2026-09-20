import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yv1sncb1v.css';
import '../../css/s/sha7wsr0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yv1sncb1v"/><path class="sha7wsr0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-open-off"} {...others} />);
}

export default Component;
