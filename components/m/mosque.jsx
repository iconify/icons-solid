import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/phbjf-bgp.css';
import '../../css/j/jm835gb6f.css';
import '../../css/t/tjcbo_urs.css';
import '../../css/p/pl2kjdbfh.css';
import '../../css/z/z5hcg5bqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="phbjf-bgp wm-k"/><path class="jm835gb6f wm-a"/><path class="tjcbo_urs wm-k"/><path class="pl2kjdbfh"/><path class="wm-s z5hcg5bqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mosque"} {...others} />);
}

export default Component;
