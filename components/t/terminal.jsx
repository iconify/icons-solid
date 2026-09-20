import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dn_xbcb7g.css';
import '../../css/g/g9ew6e1fs.css';
import '../../css/p/ppsbne-ws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="dn_xbcb7g"/><path class="g9ew6e1fs"/><path class="ppsbne-ws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:terminal"} {...others} />);
}

export default Component;
