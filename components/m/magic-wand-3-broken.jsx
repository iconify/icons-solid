import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/w/w7f1knbar.css';
import '../../css/v/vbhtlsbwa.css';
import '../../css/x/xerbjnbev.css';
import '../../css/s/seyob5b2q.css';
import '../../css/k/kop5qbcjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="w7f1knbar"/><path class="vbhtlsbwa"/><path class="xerbjnbev"/><path class="seyob5b2q"/><path class="kop5qbcjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-wand-3-broken"} {...others} />);
}

export default Component;
