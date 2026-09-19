import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/evcx3abrv.css';
import '../../css/m/me_qvif1b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="evcx3abrv"/><path class="me_qvif1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:circular-connection"} {...others} />);
}

export default Component;
