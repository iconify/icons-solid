import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u07epzbrf.css';
import '../../css/t/tl_x59b9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u07epzbrf"/><path class="tl_x59b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:reference-image"} {...others} />);
}

export default Component;
