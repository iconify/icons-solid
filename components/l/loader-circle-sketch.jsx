import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kcnigrboq.css';
import '../../css/u/u071ex15e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kcnigrboq"/><path class="u071ex15e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:loader-circle-sketch"} {...others} />);
}

export default Component;
