import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/me8evwb2s.css';
import '../../css/w/wdgizkbfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="me8evwb2s"/><path class="wdgizkbfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-pin"} {...others} />);
}

export default Component;
