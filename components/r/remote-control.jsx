import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rth9q8bav.css';
import '../../css/e/enio3mbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rth9q8bav"/><path class="enio3mbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:remote-control"} {...others} />);
}

export default Component;
