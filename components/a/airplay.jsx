import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/x/xs2edgpyy.css';
import '../../css/g/gmlwep58s.css';
import '../../css/x/x5prrsucq.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="xs2edgpyy"/><path class="gmlwep58s"/><path class="x5prrsucq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:airplay"} {...others} />);
}

export default Component;
