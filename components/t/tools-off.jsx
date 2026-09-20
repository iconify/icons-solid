import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/en1z8wbom.css';
import '../../css/t/tco20zbfe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="en1z8wbom"/><path class="tco20zbfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tools-off"} {...others} />);
}

export default Component;
