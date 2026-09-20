import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rf98kabwe.css';
import '../../css/d/d1idunu8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rf98kabwe"/><path class="d1idunu8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-exclamation"} {...others} />);
}

export default Component;
