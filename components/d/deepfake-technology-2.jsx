import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/q/qe63ffmik.css';
import '../../css/n/nj6_g4bxz.css';
import '../../css/n/n3oub-b2q.css';
import '../../css/k/kjq85cb2v.css';
import '../../css/f/fntwnnbzk.css';
import '../../css/w/wxajhccsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="qe63ffmik"/><path clip-rule="evenodd" class="nj6_g4bxz"/><path class="n3oub-b2q"/><path class="kjq85cb2v"/><path class="fntwnnbzk"/><path class="wxajhccsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:deepfake-technology-2"} {...others} />);
}

export default Component;
