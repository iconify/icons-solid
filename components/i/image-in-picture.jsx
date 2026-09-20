import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/asrm77udx.css';
import '../../css/n/n94zpo43s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="asrm77udx"/><path class="n94zpo43s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:image-in-picture"} {...others} />);
}

export default Component;
