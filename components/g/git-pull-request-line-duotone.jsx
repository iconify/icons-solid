import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/i/ixqjpwl1k.css';
import '../../css/d/dqxu8_mcp.css';
import '../../css/p/pu5j3xbce.css';
import '../../css/j/jnaj9-8_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ua_8dab4r"/><path class="ixqjpwl1k"/><path class="dqxu8_mcp"/><path class="pu5j3xbce"/><path class="jnaj9-8_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-pull-request-line-duotone"} {...others} />);
}

export default Component;
