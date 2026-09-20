import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/euoxl5beo.css';
import '../../css/r/r97eihbwv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="euoxl5beo"/><path class="r97eihbwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-roundabout-right"} {...others} />);
}

export default Component;
