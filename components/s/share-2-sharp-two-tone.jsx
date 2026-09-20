import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oucp_8b-c.css';
import '../../css/j/jqo23jbzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="oucp_8b-c"/><path class="jqo23jbzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:share-2-sharp-two-tone"} {...others} />);
}

export default Component;
