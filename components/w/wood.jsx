import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uoz8gj51b.css';
import '../../css/r/r4yc04bmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uoz8gj51b"/><path class="r4yc04bmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wood"} {...others} />);
}

export default Component;
