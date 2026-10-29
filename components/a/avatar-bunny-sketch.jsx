import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qtx3gwboz.css';
import '../../css/h/hw4w3wbpy.css';
import '../../css/c/c0jlas_ay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qtx3gwboz"/><path class="hw4w3wbpy wm-k"/><path class="c0jlas_ay wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-bunny-sketch"} {...others} />);
}

export default Component;
