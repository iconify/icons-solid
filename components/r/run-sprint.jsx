import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wsj-cxumg.css';
import '../../css/h/h-_s6eyuf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wsj-cxumg"/><path class="h-_s6eyuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:run-sprint"} {...others} />);
}

export default Component;
