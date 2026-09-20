import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w86377v7g.css';
import '../../css/i/i8yvbsg6t.css';
import '../../css/d/da3rcub4c.css';
import '../../css/n/n394obcpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w86377v7g"/><path class="i8yvbsg6t"/><path class="da3rcub4c"/><path class="n394obcpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notes-line-duotone"} {...others} />);
}

export default Component;
