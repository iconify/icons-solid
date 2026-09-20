import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nxu0v3bxr.css';
import '../../css/z/zy8o7sw2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nxu0v3bxr"/><path class="zy8o7sw2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:palette"} {...others} />);
}

export default Component;
