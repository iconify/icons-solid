import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n-14wqzon.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/f/fn1p5fm9f.css';
import '../../css/t/tlj5bqbki.css';
import '../../css/s/s76sj2w-u.css';
import '../../css/a/a05t5w7og.css';
import '../../css/n/n-gftubjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n-14wqzon"/><path class="ua_8dab4r"/><path class="fn1p5fm9f"/><path class="tlj5bqbki"/><path class="s76sj2w-u"/><path class="a05t5w7og"/><path class="n-gftubjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-graph-broken"} {...others} />);
}

export default Component;
