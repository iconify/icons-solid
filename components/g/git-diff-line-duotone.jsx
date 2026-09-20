import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/koo359vaz.css';
import '../../css/j/jnaj9-8_f.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/p/pu5j3xbce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="koo359vaz"/><path class="jnaj9-8_f"/><path class="ua_8dab4r"/><path class="pu5j3xbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-diff-line-duotone"} {...others} />);
}

export default Component;
