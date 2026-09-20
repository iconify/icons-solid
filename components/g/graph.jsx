import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zip21sk6s.css';
import '../../css/a/ar57bybsg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zip21sk6s"/><path class="ar57bybsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:graph"} {...others} />);
}

export default Component;
