import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d8b23fbyc.css';
import '../../css/d/diru-nb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d8b23fbyc"/><path class="diru-nb9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-left-duocolor-round"} {...others} />);
}

export default Component;
