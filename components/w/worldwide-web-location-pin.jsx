import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pp0c2lbom.css';
import '../../css/v/vqcluw7tz.css';
import '../../css/s/s5r94nbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pp0c2lbom"/><path class="vqcluw7tz"/><path class="s5r94nbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:worldwide-web-location-pin"} {...others} />);
}

export default Component;
