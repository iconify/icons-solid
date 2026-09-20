import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tag7o02or.css';
import '../../css/u/ujtj22nyp.css';
import '../../css/w/wxx1xmk_r.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/f/fn1p5fm9f.css';
import '../../css/t/tlj5bqbki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tag7o02or"/><path class="ujtj22nyp"/><path class="wxx1xmk_r"/><path class="ua_8dab4r"/><path class="fn1p5fm9f"/><path class="tlj5bqbki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-graph-line-duotone"} {...others} />);
}

export default Component;
